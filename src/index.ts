import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose, { MiddlewareOptions } from "mongoose";
import bodyParser from "body-parser";
import { authorRouter } from "./routes/index";

class BookStoreApplication {
  private app: Application;
  private port: number | string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.initializeMiddlewares();
    this.initializeDatabase();
    this.initializeRouters();
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  private initializeDatabase() {
    mongoose
      .connect(`${process.env.DB_URL}`)
      .then(() => console.log("database is connected!"));
  }
  private initializeRouters() {
    // routers
    this.app.use(authorRouter);
    this.app.get("/", (_req: Request, res: Response) => {
      res.send("Welcome to book store application");
    });
  }
  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

//For env File
dotenv.config();

const server = new BookStoreApplication();
server.start();
