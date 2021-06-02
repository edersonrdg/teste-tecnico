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
    }
    try {
      sut.validate(request)
    } catch (error) {
      expect(error instanceof BaseError).toBe(true)
      expect(error.message).toBe("\"name\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
})
