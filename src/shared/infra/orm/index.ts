import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Start pg connection'))
  .catch(err => console.log(err))
