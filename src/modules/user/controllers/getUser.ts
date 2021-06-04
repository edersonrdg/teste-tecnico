import { Controller } from "@shared/protocols/controller";
import { errorTreatment, sucess } from "@shared/helpers/http-helper";
import { HttpResponse } from "@shared/protocols/http";
import { UseCase } from "@shared/protocols/useCase";

interface User {
  userId: string
}

export class GetUserController implements Controller {
  constructor (
    private readonly getUser: UseCase,
  ) {}

  async handle(data: User): Promise<HttpResponse> {
    try {
      const response = await this.getUser.execute(data.userId)
      return sucess(response)
    } catch (error) {
      return errorTreatment(error)
    }
  }
}
