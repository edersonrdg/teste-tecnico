import { CreateUserDTO } from "../dtos/CreateUserDTO";

export default interface UserRepository {
  create(data: CreateUserDTO): Promise<void>
}
