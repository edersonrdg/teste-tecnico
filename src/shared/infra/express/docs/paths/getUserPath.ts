export const getUserPath = {
  get: {
    tags: ['User'],
    summary: 'Api para pegar dados de um usuário cadastrado',
    parameters: [{
      name: 'id',
      required: true,
      description: 'Id do usuário',
      schema: {
        type: 'string'
      }
    }],
    responses: {
      201: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/userSchema'
            }
          }
        }
      },
      400: {
        description: 'Bad request',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/userSchema'
            }
          }
        }
      }
    }
  }
}
