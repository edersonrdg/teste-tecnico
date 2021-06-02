import { Controller } from "../../../shared/protocols/controller";
import { created } from "../../../shared/helpers/http-helper";
import { HttpResponse } from "../../../shared/protocols/http";

export class createUserController implements Controller{
  async handle(request: any): Promise<HttpResponse> {
    return created()
  }
}
