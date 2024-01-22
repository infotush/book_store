import mongoose from "mongoose";
import Author from "../schemas/authorSchema";
import authorService from "../services/authorService";
import { Request, Response, NextFunction } from "express";

class AuthorController {
  async apiGetAllAuthors(req: Request, res: Response, _next: NextFunction) {
    try {
      const authors = await authorService.getAuthors();
      res.status(200).json(authors);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiCreateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await authorService.createAuthor(req.body);
      res.status(200).json(author);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiGetAuthorById(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await authorService.getAuthorById(req.params.id);
      res.status(200).json(author);
    } catch (e) {
      res.status(500).json({ error: `${e}` });
    }
  }
}

const authorController = new AuthorController();

export default authorController;
