import Joi from '@hapi/joi';

export const createUserValidation = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  phone: Joi.string().required(),
  cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
})
