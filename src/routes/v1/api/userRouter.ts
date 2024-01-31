import { Router } from "express";
import usersController from "../../../controllers/v1/api/usersController";

class UsersRouter {
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    /**
     * @openapi
     * /v1/api/users:
     *  get:
     *     tags:
     *     - Users
     *     summary: Get all users
     *     description: Get all the users details
     *     responses:
     *       200:
     *         description: Successful in retrieving Users
     */
    this.router.get("/users", usersController.apiGetAllUsers);
    /**
     * @openapi
     * /v1/api/users:
     *  post:
     *     tags:
     *     - Users
     *     summary: Add a new user
     *     description: Add a new user
     *     requestBody:
     *      description: Add a new user
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/CreateAuthorInput'
     *     responses:
     *      200:
     *        description: Successful added a user
     */
    this.router.post("/users", usersController.apiCreateUser);
  }
}

export default new UsersRouter().router;
