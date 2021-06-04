import { GetUserController } from "@modules/user/controllers"
import { FakeUserRepository } from "@modules/user/repositories/fakes/FakeUserRepository";
import { makeService } from "../../mocks/serviceMock";

const makeSutCreate = () => {
  const userRepo = new FakeUserRepository()
  return { userRepo }
}

const makeSut = () => {
  const getUserService = makeService()
  const sut = new GetUserController(getUserService)
  return { sut, getUserService }
}

describe('[CONTROLLER] - Get user', () => {

  it('should return a success message if all parameters are valid', async () => {
    const { userRepo } = makeSutCreate()
    const { sut, getUserService } = makeSut()
    const spyService = jest.spyOn(getUserService, 'execute')
    const firstrequest = {
      body: {
        name: "John",
        lastname: "Doe",
        phone: "+55119988023212",
        cpf: '12391239123',
      }
    }

    const response = await userRepo.create(firstrequest.body)
    if (response) {
      await sut.handle({ userId: response.id })
      expect(spyService).toHaveBeenCalledWith(response.id)
    }
  })
  it('Should calls service with correct data', async () => {
    const { sut, getUserService } = makeSut()
    const spyService = jest.spyOn(getUserService, 'execute')
    const request = {
      params: {
        userId: '123'
      }
    }

    await sut.handle(request.params)
    expect(spyService).toHaveBeenCalledWith(request.params.userId)
  })
  it('should return Error if get user service throws', async () => {
    const { sut, getUserService } = makeSut()
    jest.spyOn(getUserService, 'execute').mockImplementation(() => { throw new Error() })
    const request = {
      userId: '123'
    }
    try {
      await sut.handle(request)
    } catch (error) {
      expect(error.message).toEqual('Internal server error');
      expect(error.statusCode).toBe(500);
    }
  })
})
