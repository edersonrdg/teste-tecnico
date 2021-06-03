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
    try {
      await sut.execute(request)
      await sut.execute(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe('Cpf is already used')
      expect(error.statusCode).toBe(400)
    }
  })
  it('Should call findByCpf with valid data', async () => {
    const { sut, userRepository } = makeSut()
    const repositorySpy = jest.spyOn(userRepository, 'findByCpf')
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    await sut.execute(request)
    expect(repositorySpy).toHaveBeenCalledWith(request.cpf)
  })
  it('Should call create with valid data', async () => {
    const { sut, userRepository } = makeSut()
    const repositorySpy = jest.spyOn(userRepository, 'create')
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    await sut.execute(request)
    expect(repositorySpy).toHaveBeenCalledWith(request)
  })
})
