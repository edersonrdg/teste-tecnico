import { BaseError } from "@shared/errors/BaseError";
import { UseCase } from "@shared/protocols/useCase";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import UserRepository from "../repositories/UserRepository";

export class CreateUserService implements UseCase {
  constructor (private readonly userRepository: UserRepository) {}
  async execute(data: CreateUserDTO): Promise<void> {
    const user = await this.userRepository.findByCpf(data.cpf)
    if (user) throw new BaseError('Cpf is already used')
    await this.userRepository.create(data)
  }
}
