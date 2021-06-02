import JoiAppValidation from '@shared/infra/validators/JoiValidator'
import { createUserController } from '@modules/user/controllers/createUser'
import { createUserValidation } from '@modules/user/providers/createUserValidator'

const makeSut = () => {
  const validation = new JoiAppValidation(createUserValidation)
  return new createUserController(validation)
}

describe('[CONTROLLER] - Create user', () => {
  it('should return a success message if all parameters are valid', async () => {
    const { handle } = makeSut()
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
    const response = await handle(request)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual(sucess)
  })
})
