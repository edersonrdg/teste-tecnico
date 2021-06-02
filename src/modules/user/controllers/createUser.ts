import { Controller } from "@shared/protocols/controller";
import { created } from "@shared/helpers/http-helper";
import { HttpResponse } from "@shared/protocols/http";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UseCase } from "@shared/protocols/useCase";
import { Validation } from "@shared/protocols/validator";

export class createUserController implements Controller {
  constructor (
    private readonly createUser: UseCase,
    private readonly validation: Validation
  ) {}

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    try {
      this.validation.validate(request)
      await this.createUser.execute(request)
      return created()
    } catch (error) {
      return { statusCode: 500, body: { error: 'internal server error' }}
    }
  }
}
