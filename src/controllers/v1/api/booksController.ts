import { NextFunction, Response, Request } from "express";
import { logger } from "../../../index";
import booksService from "../../../services/v1/api/booksService";

class BooksController {
  async apiGetAllBooks(_req: Request, res: Response, _next: NextFunction) {
    try {
      logger.info("Fetching Authors");
      const books = await booksService.getBooks();
      logger.info("success", { books });
      res.status(200).json({ books, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  async apiCreateBook(req: Request, res: Response, _next: NextFunction) {
    try {
      const book = await booksService.createBook(req.body);
      res.status(200).json({ books: book, status: "Success" });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

const booksController = new BooksController();

export default booksController;
