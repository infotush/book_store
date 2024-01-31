import { Router } from "express";
import authorController from "../../../controllers/v1/api/authorsController";

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
     *     summary: Get all authors
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
     *     summary: Create an author
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
     *     summary: Delete author by ID
     *     description: Delete a single author
     *     operationId: deleteAuthor
     *     parameters:
     *      - name: authorId
     *        in: path
     *        description: authorId that needs to be deleted
     *        required: true
     *        schema:
     *          type: string
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
     *     summary: Update author by ID
     *     description: Update an author by author ID
     *     operationId: updateAuthor
     *     parameters:
     *      - name: authorId
     *        in: path
     *        description: authorId that needs to be updated
     *        required: true
     *        schema:
     *          type: string
     *     requestBody:
     *      description: update an author
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/UpdateAuthorInput'
     *     responses:
     *       200:
     *         description: Successful updated author
     */
    this.router.put("/authors/:id", authorController.apiUpdateAuthor);
  }
}

export default new AuthorRouter().router;
