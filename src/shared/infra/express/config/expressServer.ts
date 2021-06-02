import server from '@shared/infra/express/server'
import '../../orm/index'

const expressServer = () => {
  try {
    server.listen(3333, () => console.log('server start on port 3333'))
  } catch (error) {
    console.error(error)
  }
}

export default expressServer
