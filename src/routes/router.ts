import { Router } from "express";
import authorRouter from "./v1/api/authorRouter";

class BookStoreRouter {
  public router: Router = Router();
  constructor() {
    this.initializeAuthorRouter();
  }
  private initializeAuthorRouter(): void {
    this.router.use("/v1/api", authorRouter);
  }
}

export default new BookStoreRouter().router;
