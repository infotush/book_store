import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/router";
import winston from "winston";
import WinstonLogger from "./utils/logger";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";

class BookStoreApplication {
  private app: Application;
  private port: number | string;
  public logger: winston.Logger;
  constructor() {
    this.app = express();
    this.logger = new WinstonLogger().getLogger();
    this.port = process.env.PORT || 8000;
    this.initializeMiddlewares();
    this.initializeDatabase();
    this.initializeRouters();
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
  private initializeDatabase() {
    mongoose
      .connect(`${process.env.DB_URL}`)
      .then(() => this.logger.info("database is connected!"))
      .catch((e) => this.logger.error(`Error connecting database ${e}`));
  }

  private initializeRouters() {
    // routers
    this.app.use(router);
    this.app.get("/", (_req: Request, res: Response) => {
      res.send("Welcome to book store application");
    });
    this.app.get("/docs.json", (_req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
  }

  public start() {
    this.app.listen(this.port, () => {
      this.logger.info(`Server is running at http://localhost:${this.port}`);
      this.logger.info(`Docs are available at ${this.port}/docs`);
    });
  }
}

//For env File
dotenv.config();

const server = new BookStoreApplication();
export const logger = new BookStoreApplication().logger;
server.start();
