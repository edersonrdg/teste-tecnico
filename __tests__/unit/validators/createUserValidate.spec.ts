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
      expect(error.message).toBe("\"name\" is required")
    }
  })
})
