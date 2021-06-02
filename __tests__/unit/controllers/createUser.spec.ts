import { createUserController } from '@modules/user/controllers/createUser'
import { UseCase } from '@shared/protocols/useCase';
import { Validation } from '@shared/protocols/validator'

const makeCompanySignUpService = () => {
  class CompanySignUpStub implements UseCase {
    async execute(data: any): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }
  return new CompanySignUpStub();
};

export const makeValidation = () => {
  class ValidationSignUpStub implements Validation {
    validate(data: any): Error | void {
    }
  }
  return new ValidationSignUpStub();
};


const makeSut = () => {
  const validation = makeValidation()
  const createUserService = makeCompanySignUpService()
  const sut = new createUserController(createUserService, validation)
  return { sut }
}

describe('[CONTROLLER] - Create user', () => {
  it('should return a success message if all parameters are valid', async () => {
    const { sut } = makeSut()
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: 12391239123,
    }

    const sucess = {
      "success": true,
      "message": "User successfully registered!"
    }
    const response = await sut.handle(request)
    expect(response.body).toEqual(sucess)
    expect(response.statusCode).toBe(201)
  })
})
