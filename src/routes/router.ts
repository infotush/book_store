import { Router } from "express";
import authorRouter from "./v1/api/authorsRouter";
import booksRouter from "./v1/api/booksRouter";
import userRouter from "./v1/api/userRouter";
import reviewsRouter from "./v1/api/reviewsRouter";

class BookStoreRouter {
  public router: Router = Router();
  constructor() {
    this.initializeAuthorRouter();
    this.initializeBookRouter();
    this.initializeUserRouter();
    this.initializeReviewRouter();
  }
  private initializeAuthorRouter(): void {
    this.router.use("/v1/api", authorRouter);
  }
  private initializeBookRouter(): void {
    this.router.use("/v1/api", booksRouter);
  }
  private initializeUserRouter(): void {
    this.router.use("/v1/api", userRouter);
  }
  private initializeReviewRouter(): void {
    this.router.use("/v1/api", reviewsRouter);
  }
}

export default new BookStoreRouter().router;
