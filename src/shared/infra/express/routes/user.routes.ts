import { Router } from 'express'
import { adapt } from '../config/expressAdapter'
import { makeCreateUserFactory, makeGetUserFactory } from '@modules/user/factory'

const userRouter = Router()

userRouter.post('/', adapt(makeCreateUserFactory()))
userRouter.get('/:userId', adapt(makeGetUserFactory()))

export default userRouter
