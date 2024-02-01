import { Router } from "express";
import reviewsController from "../../../controllers/v1/api/reviewsController";

class ReviewsRouter {
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    /**
     * @openapi
     * /v1/api/reviews:
     *  get:
     *     tags:
     *     - Reviews
     *     summary: Get all reviews
     *     description: Get all the reviews
     *     responses:
     *       200:
     *         description: Successful in retrieving Reviews
     */
    this.router.get("/reviews", reviewsController.apiGetAllReviews);
    /**
     * @openapi
     * /v1/api/reviews:
     *  post:
     *     tags:
     *     - Reviews
     *     summary: Add a new review
     *     description: Add a new review
     *     requestBody:
     *      description: Add a new review
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/CreateAuthorInput'
     *     responses:
     *      200:
     *        description: Successful added a review
     */
    this.router.post("/reviews", reviewsController.apiCreateReview);
  }
}

export default new ReviewsRouter().router;
