import { NextFunction, Request, Response } from "express";
import { auth } from "firebase-admin";

import { getUserById } from "../db/user_db";

class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.replace(/^bearer /, "") as string;
    const decodedToken = await auth().verifyIdToken(token);

    const user = await getUserById(decodedToken.uid);
    req.user = user;

    next();
  } catch (e) {
    throw new AuthenticationError("Not authenticated");
  }
};
