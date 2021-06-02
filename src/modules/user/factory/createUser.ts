import { JoiAppValidation } from "@shared/infra/validators/JoiValidator";
import { Controller } from "@shared/protocols/controller";
import { createUserController } from "../controllers";
import { createUserValidation } from "../providers";
import { CreateUserService } from "../services";

export const makeCreateUserFactory = (): Controller => {
  const createUserService = new CreateUserService()
  const validation = new JoiAppValidation(createUserValidation)
  return new createUserController(createUserService, validation)
}
