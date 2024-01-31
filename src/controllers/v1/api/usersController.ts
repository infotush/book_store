import { NextFunction, Response, Request } from "express";
import { logger } from "../../../index";
import usersService from "../../../services/v1/api/usersService";

class UsersController {
  async apiGetAllUsers(_req: Request, res: Response, _next: NextFunction) {
    try {
      logger.info("Fetching Users");
      const users = await usersService.getUsers();
      logger.info("success", { users });
      res.status(200).json({ users, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiCreateUser(req: Request, res: Response, _next: NextFunction) {
    try {
      const user = await usersService.createUser(req.body);
      res.status(200).json({ users: user, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

const usersController = new UsersController();

export default usersController;
