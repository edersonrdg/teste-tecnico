import { Controller } from '@shared/protocols/controller';
import { Request, Response } from 'express';

export const adapt = (controller: Controller) => async (request: Request, response: Response) => {
  const data = {
    ...(request.body || {}),
    ...(request.params || {}),
  };
  const { statusCode, body } = await controller.handle(data);
  return response.status(statusCode).json(body);
};
