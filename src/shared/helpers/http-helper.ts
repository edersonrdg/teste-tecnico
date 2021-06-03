import { BaseError } from "@shared/errors/BaseError";
import { HttpResponse } from "../protocols/http";

export const appError = (MessageError: string, statusCode = 400): HttpResponse => ({
  statusCode,
  body: { "success": false, error: MessageError },
});

export const created = (): HttpResponse => ({
  statusCode: 201,
  body: { "success": true, "message": "User successfully registered!" }
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: { "success": false, error: 'Internal server error' },
});

export const errorTreatment = (error: Error): HttpResponse => {
  if (error instanceof BaseError) return appError(error.message, error.statusCode);
  console.error(error)
  return serverError();
};
