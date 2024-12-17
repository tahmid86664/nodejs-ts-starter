import { NextFunction, Request, Response } from "express";
import { initFirebaseAdmin, logger } from "../utils";

const userAuthoriztion = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = (req.headers.authorization || "").replace(/^Bearer\s/, "");

  try {
    if (!accessToken) {
      return next();
    }

    // * here is an example of firebase admin authorization
    // * you can also use the verifyJWT from this project if you have planned custom validating process

    const firebaseAdmin = initFirebaseAdmin();
    const verifiedUser = await firebaseAdmin.auth().verifyIdToken(accessToken);

    const userEmail = verifiedUser.email as string;
    logger.info(`User email: ${userEmail}`);

    // ! add your own logic

    // * provide the user information and pass to next portion of the request
    res.locals.user = { id: "user id" };

    return next();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log(error.message);
    logger.error(`Error from Authorization Catch: ${error.message}`);
    return next();
  }
};

export default userAuthoriztion;
