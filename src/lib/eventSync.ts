import cron from 'node-cron';
import reviewsService from '../services/v1/api/reviewsService'
import winston from 'winston';

export async function eventSync(logger: winston.Logger): Promise<void> {

    return new Promise((resolve, reject) => {

        // Define a cron job that runs every minute
        cron.schedule('* * * * *', async () => {
            logger.info('Running a task every minute');
            try {
                const reviews = await reviewsService.syncReviews(logger);

                logger.info(`${reviews.length} Reviews synced successfully`);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    })
}

module.exports = {
    eventSync: eventSync
}