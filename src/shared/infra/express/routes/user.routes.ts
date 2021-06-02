import { Router } from 'express'

const userRouter = Router()

userRouter.post('/', (req, res) => res.send('user'))

export default userRouter
