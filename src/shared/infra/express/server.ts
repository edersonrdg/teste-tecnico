import express from 'express'
import swagger from './config/swagger'
import routes from './routes/routes'

const server = express()

swagger(server)
server.use(express.json())
server.use('/api', routes)

export default server
