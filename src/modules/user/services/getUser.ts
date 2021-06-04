import { BaseError } from "@shared/errors/BaseError";
import { UseCase } from "@shared/protocols/useCase";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import User from "../infra/typeorm/model/User";
import UserRepository from "../repositories/UserRepository";

export class GetUserService implements UseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute(userId: string): Promise<User | void> {
    return await this.userRepository.getUser(userId)
  }
}
