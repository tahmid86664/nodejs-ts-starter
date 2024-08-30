import { Request, Response } from "express";
import { logger, SendResponse, SendErrorResponse } from "../utils";
import { UNEXPECTED_ERROR } from "../constants";
import { getExamples } from "../services";

export async function getExamplesHandler(req: Request, res: Response) {
  try {
    const examples = getExamples;
    return SendResponse.success({
      res,
      data: { examples },
      message: "Successfully fetched examples."
    });
  } catch (e: unknown) {
    const clientError = UNEXPECTED_ERROR;
    logger.error(`An unexpected error (path: ${req.path} | method: ${req.method}): `.concat((e as Error).message));
    return SendErrorResponse.error({
      res,
      message: (e as Error).name.concat(": ").concat((e as Error).message),
      data: { clientError }
    });
  }
}
