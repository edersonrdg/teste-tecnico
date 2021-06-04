import { BaseError } from "@shared/errors/BaseError";
import { UseCase } from "@shared/protocols/useCase";
import User from "../infra/typeorm/model/User";
import UserRepository from "../repositories/UserRepository";

export class GetUserService implements UseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute(userId: string): Promise<User | void> {
    const user = await this.userRepository.getUser(userId)
    if (!user) throw new BaseError('Invalid user id')

    return user
  }
}
