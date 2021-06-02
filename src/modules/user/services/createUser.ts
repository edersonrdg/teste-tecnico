import { UseCase } from "@shared/protocols/useCase";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import UserRepository from "../repositories/UserRepository";

export class CreateUserService implements UseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute(data: CreateUserDTO): Promise<void> {
    await this.userRepository.create(data)
  }
}
