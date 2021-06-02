import { Controller } from "@shared/protocols/controller";
import { created } from "@shared/helpers/http-helper";
import { HttpResponse } from "@shared/protocols/http";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { Validation } from "@shared/protocols/validator";

export class createUserController implements Controller {
  constructor (private readonly validation: Validation) {}
  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    try {
      this.validation.validate(request)
    } catch (error) {
      console.log(error)
    }
    return created()
  }
}
