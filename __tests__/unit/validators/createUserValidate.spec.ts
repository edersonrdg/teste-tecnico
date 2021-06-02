import { createUserValidation } from '@modules/user/providers/createUserJoiSchema'
import { BaseError } from '@shared/errors/BaseError'
import { JoiAppValidation } from '@shared/infra/validators/JoiValidator'

const makeSut = () => {
  const sut = new JoiAppValidation(createUserValidation)
  return { sut }
}

describe('[VALIDATION] - create user', () => {

  it('Should return error if no user name is provided', async () => {
    const { sut } = makeSut()
    const request = {
      lastname: "Doe",
      phone: "+55119988023212",
      cpf: "12312312312"
    }
    try {
      sut.validate(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe("\"name\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
  it('Should return error if no user lastname is provided', async () => {
    const { sut } = makeSut()
    const request = {
      name: "Doe",
      phone: "+55119988023212",
      cpf: "12312312312"
    }
    try {
      sut.validate(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe("\"lastname\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
  it('Should return error if no user phone is provided', async () => {
    const { sut } = makeSut()
    const request = {
      name: "Doe",
      lastname: "qwe",
      cpf: "12312312312"
    }
    try {
      sut.validate(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe("\"phone\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
  it('Should return error if no user cpf is provided', async () => {
    const { sut } = makeSut()
    const request = {
      name: "Doe",
      lastname: "qwe",
      phone: "+55119988023212",
    }
    try {
      sut.validate(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe("\"cpf\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
})
