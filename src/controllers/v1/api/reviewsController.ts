import { NextFunction, Response, Request } from "express";
import { logger } from "../../../index";
import reviewsService from "../../../services/v1/api/reviewsService";

class ReviewsController {
  async apiGetAllReviews(_req: Request, res: Response, _next: NextFunction) {
    try {
      logger.info("Fetching Reviews");
      const reviews = await reviewsService.getReviews();
      logger.info("success", { reviews });
      res.status(200).json({ reviews, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiCreateReview(req: Request, res: Response, _next: NextFunction) {
    try {
      const review = await reviewsService.createReview(req.body);
      res.status(200).json({ reviews: review, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

const reviewsController = new ReviewsController();

export default reviewsController;
