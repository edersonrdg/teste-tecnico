import Joi from '@hapi/joi'
import { cpf } from 'cpf-cnpj-validator';

const createUserValidation = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  phone: Joi.string().required(),
})

export function validate(data: any): Error | void {
    const { error } = createUserValidation.validate(data)
    if (error) throw new Error(error.message)
}
