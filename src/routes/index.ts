/**
 * Export all the routers of version 1 or v1 from here as default
 */

import express from "express";
import config from "config";
import exampleRouter from "./example.router";
import { SendResponse } from "../utils";

const router = express.Router();

const PROJECT_NAME: string = config.get<string>("server.projectName") || "NodeJS TS Starter Service";

router.get("/", (req, res): void => {
  SendResponse.success({ res, message: `${PROJECT_NAME} - v1 API root directory` });
});
router.use("/example", exampleRouter);

export default router;
