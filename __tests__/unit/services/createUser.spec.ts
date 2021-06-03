import { FakeUserRepository } from "@modules/user/repositories/fakes/FakeUserRepository"
import { CreateUserService } from "@modules/user/services"
import { BaseError } from "@shared/errors/BaseError"

const makeSut = () => {
  const userRepository = new FakeUserRepository()
  const sut = new CreateUserService(userRepository)
  return { sut, userRepository }
}

describe('[SERVICE] - Create user', () => {
  it('Should return error if user cpf is already used', async () => {
    const { sut } = makeSut()
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    await sut.execute(request)
    expect(sut.execute(request)).rejects.toBeInstanceOf(BaseError)
  })
})
