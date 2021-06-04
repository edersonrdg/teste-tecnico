import { createUserController } from '@modules/user/controllers/createUser'
import { BaseError } from '@shared/errors/BaseError';
import { makeService } from '../../mocks/serviceMock';
import { makeValidation } from '../../mocks/validationMock';

const makeSut = () => {
  const validation = makeValidation()
  const createUserService = makeService()
  const sut = new createUserController(createUserService, validation)
  return { sut, validation, createUserService }
}

describe('[CONTROLLER] - Create user', () => {
  it('should return a success message if all parameters are valid', async () => {
    const { sut } = makeSut()
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }

    const sucess = {
      "success": true,
      "message": "User successfully registered!"
    }
    const response = await sut.handle(request)
    expect(response.body).toEqual(sucess)
    expect(response.statusCode).toBe(201)
  })
  it('should calls create user validation with valid data', async () => {
    const { sut, validation } = makeSut()
    const spyValidation = jest.spyOn(validation, 'validate')
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    await sut.handle(request)
    expect(spyValidation).toHaveBeenCalledWith(request)
  })
  it('should calls create user service with valid data', async () => {
    const { sut, createUserService } = makeSut()
    const spyService = jest.spyOn(createUserService, 'execute')
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    await sut.handle(request)
    expect(spyService).toHaveBeenCalledWith(request)
  })
  it('should return Error if create user validation internal throws', async () => {
    const { sut, validation } = makeSut()
    jest.spyOn(validation, 'validate').mockImplementation(() => { throw new Error() })
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    try {
      await sut.handle(request)
    } catch (error) {
      expect(error.message).toEqual('Internal server error');
      expect(error.statusCode).toBe(500);
    }
  })
  it('should return Error if create user validation app throws', async () => {
    const { sut, validation } = makeSut()
    jest.spyOn(validation, 'validate').mockImplementation(() => { throw new BaseError('app error') })
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    try {
      await sut.handle(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe('app error');
      expect(error.statusCode).toBe(400);
    }
  })
  it('should return Error if create user service throws', async () => {
    const { sut, createUserService } = makeSut()
    jest.spyOn(createUserService, 'execute').mockImplementation(() => { throw new Error() })
    const request = {
      name: "John",
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: '12391239123',
    }
    try {
      await sut.handle(request)
    } catch (error) {
      expect(error.message).toEqual('Internal server error');
      expect(error.statusCode).toBe(500);
    }
  })
})
