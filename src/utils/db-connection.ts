import "dotenv/config";
// import config from "config";
import { logger } from "./logger";

export async function dbConnection() {
  // ! Add database connection like the following (remove comment) if you want to use Mongoose to connect MondoDB.
  // const URI = config.get<string>("db.uri");
  // await mongoose.connect(URI, {});

  logger.info("Connected to the database");
}
