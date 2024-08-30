import { NextFunction, Request, Response } from "express";
import { SendErrorResponse, verifyJWT } from "../utils";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = (req.headers.authorization || "").replace(/^Bearer\s/, "");

  if (!accessToken) {
    return next();
  }
  const decoded = verifyJWT(accessToken, "auth.accessTokenPrivateKey");

  if (decoded) {
    res.locals.user = decoded.payload;
  }

  if (decoded.payload === null) {
    return SendErrorResponse.unauthorized({ res, message: "Invalid access token" });
  }

  return next();
};

export default deserializeUser;
