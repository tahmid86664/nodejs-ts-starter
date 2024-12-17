import { NextFunction, Request, Response } from "express";
import { SendErrorResponse } from "../utils";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const { user } = res.locals;

  if (!user) {
    SendErrorResponse.unauthorized({
      res,
      message: "Unauthorized request!!!"
    });
    return;
  }

  return next();
};

export default requireUser;
