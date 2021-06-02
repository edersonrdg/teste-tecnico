import { created } from "../../../shared/helpers/http-helper";
import { HttpResponse } from "../protocols/http";

export class createUserController {
  async handle(request: any): Promise<HttpResponse> {
    return created()
  }
}
