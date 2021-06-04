import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Start database connection'))
  .catch(err => console.log(err))
