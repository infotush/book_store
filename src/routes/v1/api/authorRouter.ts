import { Router } from "express";
import authorController from "../../../controllers/authorController";

class AuthorRouter {
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get("/authors", authorController.apiGetAllAuthors);
    this.router.post("/authors", authorController.apiCreateAuthor);
    this.router.get("/authors/:id", authorController.apiGetAuthorById);
  }
}

export default new AuthorRouter().router;
