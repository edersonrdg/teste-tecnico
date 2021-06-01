import app from './config/app'

const expressServer = () => {
  try {
    app.listen(3333, () => console.log('server started on port 3333'))
  } catch (error) {
    console.error(error)
  }
}

export default expressServer
