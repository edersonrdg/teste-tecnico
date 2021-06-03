import { CreateUserDTO } from "@modules/user/dtos/CreateUserDTO";
import UserRepository from "@modules/user/repositories/UserRepository";
import { getRepository } from "typeorm";
import User from "../model/User";

export class UserRepositoryPG implements UserRepository {
  async create(data: CreateUserDTO): Promise<void> {
    const repository = getRepository(User)
    const user = repository.create(data)
    await repository.save(user)
  }
  async findByCpf(cpf: string): Promise<User | void> {
    const repository = getRepository(User)
    const user = await repository.findOne({
      where: {
        cpf
      }
    })
    return user
  }
}
