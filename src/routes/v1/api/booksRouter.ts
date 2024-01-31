import { Router } from "express";
import booksController from "../../../controllers/v1/api/booksController";

class BooksRouter {
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    /**
     * @openapi
     * /v1/api/books:
     *  get:
     *     tags:
     *     - Books
     *     summary: Get all books
     *     description: Get all the books details
     *     responses:
     *       200:
     *         description: Successful in retrieving Books
     */
    this.router.get("/books", booksController.apiGetAllBooks);
    /**
     * @openapi
     * /v1/api/books:
     *  post:
     *     tags:
     *     - Books
     *     summary: Add a new book
     *     description: Add a new book
     *     requestBody:
     *      description: Add a new book
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/CreateAuthorInput'
     *     responses:
     *      200:
     *        description: Successful added a book
     */
    this.router.post("/books", booksController.apiCreateBook);
  }
}

export default new BooksRouter().router;
