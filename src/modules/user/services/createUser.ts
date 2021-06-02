import { UseCase } from "@shared/protocols/useCase";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserService implements UseCase{
  async execute(data: CreateUserDTO): Promise<string> {
    return 'test'
  }
}
