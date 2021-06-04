import { userPath } from './paths/userPath'
import { userSchema } from './schemas/users'
import { userParamsSchema } from './schemas/userParams'
import { getUserPath } from './paths/getUserPath'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Teste tecnico',
    description: 'Teste tecnico para empresa doWhile',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{ name: 'User' }],
  paths: {
    'api/users': userPath,
    'api/users/{id}': getUserPath
  },
  schemas: {
    userSchema,
    userParamsSchema
  }
}
