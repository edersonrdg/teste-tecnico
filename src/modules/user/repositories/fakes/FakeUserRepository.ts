import { CreateUserDTO } from "@modules/user/dtos/CreateUserDTO";
import User from "@modules/user/infra/typeorm/model/User";
import UserRepository from "../UserRepository";
import { v4 } from 'uuid'

export class FakeUserRepository implements UserRepository {
  private Users: User[] = [];

  async create({ name, lastname, cpf, phone }: CreateUserDTO): Promise<User | void> {
    const id =  v4()
    const user = new User()
    const response = Object.assign(user, {
      id, name, lastname, cpf, phone
    })

    this.Users.push(user)

    return response
  }
  async findByCpf(cpf: string): Promise<User | void> {
    return this.Users.find(user => user.cpf === cpf)
  }
  async getUser(userId: string): Promise<User | void> {
    return this.Users.find(user => user.id === userId)
  }
}
