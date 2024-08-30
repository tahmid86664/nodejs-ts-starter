import "dotenv/config";
import config from "config";
import mongoose from "mongoose";
import { logger } from "./logger";

export async function dbConnection() {
  const URI = config.get<string>("db.uri");

  const url = URI;

  await mongoose.connect(url, {});
  logger.info("Connected to the database");
}
