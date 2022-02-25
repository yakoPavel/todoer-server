import { NextFunction, Request, Response } from "express";

import * as logger from "@/utils/logger";

export const unknownEndpoint = (request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "Incorrect id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
