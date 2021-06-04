import { CreateUserDTO } from "../dtos/CreateUserDTO";
import User from "../infra/typeorm/model/User";

export default interface UserRepository {
  create(data: CreateUserDTO): Promise<void>
  getUser(userId: string): Promise<User | void>
  findByCpf(cpf: string): Promise<User | void>
}
