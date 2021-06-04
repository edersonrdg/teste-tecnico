export const userResponse = {
  type: 'object',
  properties: {
    sucess: {
      type: 'boolean'
    },
    data: {
      type: 'object',
      properties:
        {
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
        }
    }
  }
}
