import { createUserValidation } from '@modules/user/providers/createUserValidator'
import { BaseError } from '@shared/errors/BaseError'
import JoiAppValidation from '@shared/infra/validators/JoiValidator'

const makeSut = () => {
  return new JoiAppValidation(createUserValidation)
}

describe('[VALIDATION] - create user', () => {
  it('Should return error if no user name is provided', () => {
    const { validate } = makeSut()
    const request = {
      phone: 123,
      lastname: 'silva'
    }
    try {
      validate(request)
    } catch (error) {
      expect(error).toBeInstanceOf(BaseError)
      expect(error.message).toBe("\"name\" is required")
      expect(error.statusCode).toBe(400)
    }
  })
})
