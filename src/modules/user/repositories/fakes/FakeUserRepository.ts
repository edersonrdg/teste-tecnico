import { CreateUserDTO } from "@modules/user/dtos/CreateUserDTO";
import UserRepository from "../UserRepository";

export class FakeUserRepository implements UserRepository {
  private users: any[] = [];

  async create(data: CreateUserDTO): Promise<void> {
    console.log('repo')
  }
}
