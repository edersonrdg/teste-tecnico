import { Router } from 'express'
import { adapt } from '../config/expressAdapter'
import { makeCreateUserFactory } from '@modules/user/factory'

const userRouter = Router()

userRouter.post('/', adapt(makeCreateUserFactory()))

export default userRouter
