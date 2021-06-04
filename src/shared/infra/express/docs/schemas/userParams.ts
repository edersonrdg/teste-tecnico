export const userParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    cpf: {
      type: 'string'
    }
  },
  required: ['name', 'lastname', 'phone', 'cpf']
}
