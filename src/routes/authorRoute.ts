import { Router, Request, Response } from "express";
import Author from "../schemas/authorSchema";
import { error } from "console";
import authorController from "../controllers/authorController";

const router = Router();

router.get("/v1/api/authors", authorController.apiGetAllAuthors);
router.post("/v1/api/authors", authorController.apiCreateAuthor);
router.get("/v1/api/authors/:id", authorController.apiGetAuthorById);

export { router as authorRouter };
