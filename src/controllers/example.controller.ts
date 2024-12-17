import { Request, Response } from "express";

import { ExampleRequestBodyInputType } from "../schemas";
import { logger, SendErrorResponse, SendResponse } from "../utils";
import { exampleService } from "../services";
import { BAD_REQUEST_ERROR } from "../constants";

export async function examplePostHandler(
  req: Request<Record<string, never>, Record<string, never>, ExampleRequestBodyInputType>,
  res: Response
) {
  const exampleServiceCall = await exampleService();
  logger.info(`Example Log: `, exampleServiceCall);
  return SendResponse.success({
    res,
    message: "Successful Request!!!",
    data: {
      clientData: "What ever your frontend needed!"
    }
  });
}

export async function exampleGetHandler(req: Request, res: Response) {
  const { exampleId } = req.query;
  if (!exampleId) {
    logger.error("It's an example call to understand how can we use logger with the help of winston");
    return SendErrorResponse.badRequest({
      res,
      message: "Request Error!!!",
      data: {
        clientError: BAD_REQUEST_ERROR
      }
    });
  }
  return SendResponse.success({
    res,
    message: "Successful Request!!!",
    data: {
      clientData: "What ever your frontend needed!"
    }
  });
}
