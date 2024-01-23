import { Router } from "express";
import AuthorRouter from "./v1/api/authorRouter";

class BookStoreRouter {
  public router: Router = Router();
  constructor() {
    this.initializeAuthorRouter();
  }
  private initializeAuthorRouter(): void {
    this.router.use("/v1/api", AuthorRouter);
  }
}

export default new BookStoreRouter().router;
