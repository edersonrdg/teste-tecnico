import { HttpResponse } from "../protocols/http";

export const created = (): HttpResponse => ({
  statusCode: 201,
  body: { "success": true, "message": "User successfully registered!" }
});