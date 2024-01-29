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
    /**
     * @openapi
     * /v1/api/authors:
     *  post:
     *     tags:
     *     - Authors
     *     description: Create a new author
     *     requestBody:
     *      description: create a new author
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/CreateAuthorInput'
     *     responses:
     *      200:
     *        description: Successful created author
     */
    this.router.post("/authors", authorController.apiCreateAuthor);
    /**
     * @openapi
     * /v1/api/authors/{authorId}:
     *  get:
     *     tags:
     *     - Authors
     *     summary: Find author by ID
     *     description: returns a single author
     *     parameters:
     *        - name: authorId
     *          in: path
     *          description: Id of author to return
     *     responses:
     *       200:
     *         description: Author data retrieved
     *       400:
     *         description: Invalid Id supplied
     *       404:
     *         description: Author not found
     */
    this.router.get("/authors/:id", authorController.apiGetAuthorById);
    /**
     * @openapi
     * /v1/api/authors/{authorId}:
     *  delete:
     *     tags:
     *     - Authors
     *     description: Delete a single author
     *     responses:
     *       200:
     *         description: Successful deleted author
     *       400:
     *         description: Invalid Id supplied
     *       404:
     *         description: Author not found
     */
    this.router.delete("/authors/:id", authorController.apiDeleteAuthor);
    /**
     * @openapi
     * /v1/api/authors/{authorId}:
     *  put:
     *     tags:
     *     - Authors
     *     description: Delete a single author
     *     responses:
     *       200:
     *         description: Successful deleted author
     */
    this.router.put("/authors/:id", authorController.apiUpdateAuthor);
  }
}

export default new AuthorRouter().router;
