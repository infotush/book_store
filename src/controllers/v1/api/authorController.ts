import { logger } from "../../../index";
import WinstonLogger from "../../../logger";

import authorService from "../../../services/v1/api/authorService";
import { Request, Response, NextFunction } from "express";

class AuthorController {
  async apiGetAllAuthors(req: Request, res: Response, _next: NextFunction) {
    try {
      logger.info("Fetching Authors");
      const authors = await authorService.getAuthors();
      logger.info("success", { authors });
      res.status(200).json({ authors, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiCreateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await authorService.createAuthor(req.body);
      res.status(200).json({ author, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiGetAuthorById(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await authorService.getAuthorById(req.params.id);
      res.status(200).json({ author, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: `${e}` });
    }
  }
  async apiDeleteAuthor(req: Request, res: Response, _next: NextFunction) {
    try {
      const author = await authorService.deleteAuthor(req.params.id);
      res.status(200).json(author);
    } catch (e) {
      res.status(500).json({ error: `${e}` });
    }
  }
  async apiUpdateAuthor(req: Request, res: Response, _next: NextFunction) {
    try {
      const author = await authorService.updateAuthor(req.params.id, req.body);
      res.status(200).json(author);
    } catch (e) {
      res.status(500).json({ error: `${e}` });
    }
  }
}

const authorController = new AuthorController();

export default authorController;
