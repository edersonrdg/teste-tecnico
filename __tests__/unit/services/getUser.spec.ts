import { FakeUserRepository } from "@modules/user/repositories/fakes/FakeUserRepository"
import { GetUserService } from "@modules/user/services"
import { BaseError } from "@shared/errors/BaseError"

const makeSut = () => {
  const userRepository = new FakeUserRepository()
  const sut = new GetUserService(userRepository)
  return { sut, userRepository }
}

describe('[SERVICE] - Get user', () => {
  it('Should return error if user id is invalid', async () => {
    const { sut, userRepository } = makeSut()
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    try {
      await userRepository.create(request)
      await sut.execute('123')
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe('Invalid user id')
      expect(error.statusCode).toBe(400)
    }
  })
  it('Should return user by id', async () => {
    const { sut, userRepository } = makeSut()
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    const response = await userRepository.create(request)
    if (response) {
      const user = await sut.execute(response.id)
      expect(user).not.toBeUndefined
    }
  })
})
