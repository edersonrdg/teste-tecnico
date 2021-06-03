import { JoiAppValidation } from "@shared/infra/validators/JoiValidator";
import { Controller } from "@shared/protocols/controller";
import { createUserController } from "../controllers";
import { UserRepositoryPG } from "../infra/typeorm/repositories/UserRepository";
import { createUserValidation } from "../providers";
import { CreateUserService } from "../services";

export const makeCreateUserFactory = (): Controller => {
  const userRepository = new UserRepositoryPG()
  const createUserService = new CreateUserService(userRepository)
  const validation = new JoiAppValidation(createUserValidation)
  return new createUserController(createUserService, validation)
}
