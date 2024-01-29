import { Router } from "express";
import authorController from "../../../controllers/v1/api/authorController";

class AuthorRouter {
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    /**
     * @openapi
     * /v1/api/authors:
     *  get:
     *     tags:
     *     - Authors
     *     description: Get all the authors details
     *     responses:
     *       200:
     *         description: Successful in retrieving Authors
     */
    this.router.get("/authors", authorController.apiGetAllAuthors);
    this.router.post("/authors", authorController.apiCreateAuthor);
    this.router.get("/authors/:id", authorController.apiGetAuthorById);
    this.router.delete("/authors/:id", authorController.apiDeleteAuthor);
    this.router.put("/authors/:id", authorController.apiUpdateAuthor);
  }
}

export default new AuthorRouter().router;
