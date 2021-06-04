import { Controller } from "@shared/protocols/controller";
import { errorTreatment, sucess } from "@shared/helpers/http-helper";
import { HttpResponse } from "@shared/protocols/http";
import { UseCase } from "@shared/protocols/useCase";

export class GetUserController implements Controller {
  constructor (
    private readonly getUser: UseCase,
  ) {}

  async handle(userId: string): Promise<HttpResponse> {
    try {
      const response = await this.getUser.execute(userId)
      return sucess(response)
    } catch (error) {
      return errorTreatment(error)
    }
  }
}
