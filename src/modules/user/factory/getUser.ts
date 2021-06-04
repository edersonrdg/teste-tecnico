import { Controller } from "@shared/protocols/controller";
import { GetUserController } from "../controllers";
import { UserRepositoryPG } from "../infra/typeorm/repositories/UserRepository";
import { GetUserService } from "../services";

export const makeGetUserFactory = (): Controller => {
  const userRepository = new UserRepositoryPG()
  const getUserService = new GetUserService(userRepository)
  return new GetUserController(getUserService)
}
