import { JoiAppValidation } from "@shared/infra/validators/JoiValidator";
import { Controller } from "@shared/protocols/controller";
import { createUserController } from "../controllers";
import { createUserValidation } from "../providers";
import { FakeUserRepository } from "../repositories/fakes/FakeUserRepository";
import { CreateUserService } from "../services";

export const makeCreateUserFactory = (): Controller => {
  const userRepository = new FakeUserRepository()
  const createUserService = new CreateUserService(userRepository)
  const validation = new JoiAppValidation(createUserValidation)
  return new createUserController(createUserService, validation)
}
