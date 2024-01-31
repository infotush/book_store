import { Router } from "express";
import authorRouter from "./v1/api/authorsRouter";
import booksRouter from "./v1/api/booksRouter";

class BookStoreRouter {
  public router: Router = Router();
  constructor() {
    this.initializeAuthorRouter();
    this.initializeBookRouter();
  }
  private initializeAuthorRouter(): void {
    this.router.use("/v1/api", authorRouter);
  }
  private initializeBookRouter(): void {
    this.router.use("/v1/api", booksRouter);
  }
}

export default new BookStoreRouter().router;
