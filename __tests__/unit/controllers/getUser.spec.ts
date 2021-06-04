import { GetUserController } from "@modules/user/controllers"
import { UseCase } from "@shared/protocols/useCase";

const makeGetUserService = () => {
  class GetUserStub implements UseCase {
    async execute(data: any): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }
  return new GetUserStub();
};


const makeSut = () => {
  const getUserService = makeGetUserService()
  const sut = new GetUserController(getUserService)
  return { sut, getUserService }
}

describe('[CONTROLLER] - Get user', () => {
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
})
