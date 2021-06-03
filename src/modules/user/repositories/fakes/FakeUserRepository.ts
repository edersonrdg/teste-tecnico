import { CreateUserDTO } from "@modules/user/dtos/CreateUserDTO";
import User from "@modules/user/infra/typeorm/model/User";
import UserRepository from "../UserRepository";
import { v4 } from 'uuid'

export class FakeUserRepository implements UserRepository {
  private Users: User[] = [];

  async create({ name, lastname, cpf, phone }: CreateUserDTO): Promise<void> {
    const user = new User()
    Object.assign(user, {
      id: v4(), name, lastname, cpf, phone
    })

    this.Users.push(user)
  }
  async findByCpf(cpf: string): Promise<User | void> {
    return this.Users.find(user => user.cpf === cpf)
  }
}
