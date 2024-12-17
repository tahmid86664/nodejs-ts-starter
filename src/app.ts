import "dotenv/config";
import express, { Express, Request, Response } from "express";
import config from "config";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";

import v1Router from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/error-handler";
import { SendResponse } from "./utils";
import { userAuthoriztion } from "./middleware";

const app: Express = express();

app.use(express.json());
app.use(helmet());

const corsOptions: CorsOptions = {
  origin: [
    "*"
    // ! Add more origins if need
  ],
  credentials: true
  // methods: ["GET", "POST", "PUT"] // ! Uncomment if it's needed to restrict request methods
};

const PROJECT_NAME: string = config.get<string>("server.projectName") || "NodeJS TS Starter Service";
const v1BaseEndpoint = "/api/v1";

app.use(cors(corsOptions));

app.use(userAuthoriztion);

app.get("/", (req: Request, res: Response): void => {
  SendResponse.success({ res, message: `Hello from ${PROJECT_NAME}!!!` });
});

app.use(v1BaseEndpoint, v1Router);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
