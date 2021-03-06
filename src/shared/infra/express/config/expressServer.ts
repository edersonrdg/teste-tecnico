import server from '@shared/infra/express/server'
import '../../typeorm/index'

const expressServer = () => {
  try {
    server.listen(3333, () => console.log('server start on port 3333'))
  } catch (error) {
    console.error(error)
  }
}

export default expressServer
