import { Controller } from "@shared/protocols/controller";
import { created } from "@shared/helpers/http-helper";
import { HttpResponse } from "@shared/protocols/http";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class createUserController implements Controller {
  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    return created()
  }
}
