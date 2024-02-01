import Review, { IReview } from "../../../models/reviewsModel";

class ReviewsService {
  async getReviews() {
    try {
      const reviews = await Review.find({});
      return reviews;
    } catch (e) {
      throw new Error(`Reviews cannot be retrieved ${e}`);
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
      return review;
    } catch (e) {
      throw new Error(`Review cannot be added ${e}`);
    }
  }
}

const reviewsService = new ReviewsService();

export default reviewsService;
