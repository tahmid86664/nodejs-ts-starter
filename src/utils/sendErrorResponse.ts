import { Response } from "express";
import { httpStatus } from "../constants";

interface ErrorResponseProps<T> {
  res: Response;
  data?: T;
  message?: string;
}

export class SendErrorResponse {
  private static sendErrorResponse<T>(res: Response, statusCode: number, { data, message }: ErrorResponseProps<T>) {
    return res.status(statusCode).json({
      success: false,
      message,
      data
    });
  }

  static badRequest<T>(props: ErrorResponseProps<T>) {
    return this.sendErrorResponse(props.res, httpStatus.BAD_REQUEST, props);
  }

  static notFound<T>(props: ErrorResponseProps<T>) {
    return this.sendErrorResponse(props.res, httpStatus.NOT_FOUND, props);
  }

  static conflict<T>(props: ErrorResponseProps<T>) {
    return this.sendErrorResponse(props.res, httpStatus.CONFLICT, props);
  }

  static unauthorized<T>(props: ErrorResponseProps<T>) {
    return this.sendErrorResponse(props.res, httpStatus.UNAUTHORIZED, props);
  }

  static internalServer<T>(props: ErrorResponseProps<T>) {
    return this.sendErrorResponse(props.res, httpStatus.INTERNAL_SERVER_ERROR, props);
  }
}
