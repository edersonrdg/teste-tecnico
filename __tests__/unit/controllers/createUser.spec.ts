import { createUserController } from '../../../src/modules/user/controllers/createUser'

const makeSut = () => {
  return new createUserController()
}

describe('[CONTROLLER] - Create user', () => {
  it('should return a success message if all parameters are valid', async () => {
    const { handle } = makeSut()
    const request = {
      "name": "John",
      "lastname": "Doe",
      "phone": "+55119988023212",
      "cpf": "01223284721"
    }
    const sucess = {
      "success": true,
      "message": "User successfully registered!"
    }
    const response = await handle(request)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual(sucess)
  })
})
