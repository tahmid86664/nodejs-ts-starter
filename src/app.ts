import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";
import "dotenv/config";

import cookieParser from "cookie-parser";
import router from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/error-handler";
import { SendResponse } from "./utils";
import deserializeUser from "./middleware/deserializeUser";

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

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(deserializeUser);

app.get("/", (req: Request, res: Response) => SendResponse.success({ res, message: "Hello from Backend Starter Service!!!" }));

app.use("/api/v1", router);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
