import express from "express";
import mongoose from "mongoose";
import "express-async-errors";

import { authenticateUserMiddleware } from "@/components/users";
import * as middleware from "@/middleware";
import * as config from "@/utils/config";
import * as logger from "@/utils/logger";

logger.info("Connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB!");
  })
  .catch((error) => {
    logger.error(
      "An error happened during connection to MongoDB:",
      error.message,
    );
  });

const app = express();

app.use(express.static("../build"));
app.use(express.json());
app.use(authenticateUserMiddleware);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export { app };
