import "dotenv/config";

import express from "express";
import config from "config";
import exampleRouter from "./example.router";
import { SendResponse } from "../utils";

const router = express.Router();

const PROJECT_NAME: string = config.get<string>("server.project_name") || "Backend Starter Service";

router.use("/example", exampleRouter);
router.get("/", (req, res) => SendResponse.success({ res, message: `${PROJECT_NAME} - v1 API root directory` }));

export default router;
