import { CreateUserDTO } from "@modules/user/dtos/CreateUserDTO";
import UserRepository from "@modules/user/repositories/UserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../model/User";

export class UserRepositoryPG implements UserRepository {
  async create(data: CreateUserDTO): Promise<void> {
    const repository = getRepository(User)
    const user = repository.create(data)
    await repository.save(user)
  }
}
