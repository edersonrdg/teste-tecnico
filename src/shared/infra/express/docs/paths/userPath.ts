export const userPath = {
  post: {
    tags: ['User'],
    summary: 'Api para criação de um novo usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/userParamsSchema'
          }
        }
      }
    },
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
        description: 'Bad request'
      }
    }
  }
}
