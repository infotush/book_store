import { EventHubConsumerClient, EventHubProducerClient, earliestEventPosition } from "@azure/event-hubs";
import Review, { IReview } from "../../../models/reviewsModel";
import { ContainerClient } from "@azure/storage-blob";
import { BlobCheckpointStore } from "@azure/eventhubs-checkpointstore-blob";
import winston from "winston";

class ReviewsService {
  async getReviews() {
    try {
      const reviews = await Review.find({});
      return reviews;
    } catch (e) {
      throw new Error(`Reviews cannot be retrieved ${e}`);
    }
  }


  async syncReviews(logger: winston.Logger): Promise<IReview[]> {
    try {
      // Get reviews from eventhub and sync into DB

      const reviews: IReview[] = [];

      // Create a blob container client and a blob checkpoint store using the client.
      const containerClient = new ContainerClient(process.env.STORAGE_CONNECTION_STRING!, process.env.STORAGE_CONTAINER_NAME!);
      const checkpointStore = new BlobCheckpointStore(containerClient);

      // Create a consumer client for the event hub by specifying the checkpoint store.
      const consumerClient = new EventHubConsumerClient(process.env.CONSUMER_GROUP!, process.env.CONSUMER_CONNECTION_STRING!, process.env.EVENT_HUB_NAME!, checkpointStore);

      // Subscribe to the events, and specify handlers for processing the events and errors.
      const subscription = consumerClient.subscribe({
        processEvents: async (events, context) => {
          if (events.length === 0) {
            logger.info(`No events received within wait time. Waiting for next interval`);
            return;
          }

          for (const event of events) {
            logger.info(`Received event: '${event.body}' from partition: '${context.partitionId}' and consumer group: '${context.consumerGroup}'`);

            const newReview = await new Review(event.body).save();

            reviews.push(newReview);
          }
          // Update the checkpoint.
          await context.updateCheckpoint(events[events.length - 1]);
        },

        processError: async (err, _context) => {
          throw new Error(`Reviews cannot be retrieved ${err}`);
        }
      },
        { startPosition: earliestEventPosition }
      );

      // After 30 seconds, stop processing.
      await new Promise<void>((resolve) => {
        setTimeout(async () => {
          await subscription.close();
          await consumerClient.close();
          resolve();
        }, 30000);
      });


      return reviews;
    } catch (e) {
      throw new Error(`Reviews cannot be synced ${e}`);
    }
  }

  async createReview(data: IReview) {
    try {
      const { bookId, userId, ratings, comments } = data;
      const newReview = {
        bookId,
        userId,
        ratings,
        comments,
        createdAt: new Date(),
      };
      const review = await new Review(newReview).save();
      // Add to eventhub

      // Create a producer client to send messages to the event hub.
      const producer = new EventHubProducerClient(process.env.EVENT_HUBS_NAMESPACE!, process.env.EVENT_HUB_NAME!);

      // Prepare a batch of three events.
      const batch = await producer.createBatch();
      batch.tryAdd({ body: review });

      // Send the batch to the event hub.
      await producer.sendBatch(batch);

      // Close the producer client.
      await producer.close();

      console.log("A batch of one event have been sent to the event hub");
      return review;

    } catch (e) {
      throw new Error(`Review cannot be added ${e}`);
    }
  }
}

const reviewsService = new ReviewsService();

export default reviewsService;
