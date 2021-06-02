import { BaseError } from '@shared/errors/BaseError'
import { validate } from '../../../src/modules/user/providers/createUserValidator'

describe('[VALIDATION] - create user', () => {
  it('Should return error if no user name is provided', () => {
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
