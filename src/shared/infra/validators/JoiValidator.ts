import { ObjectSchema } from '@hapi/joi'
import { BaseError } from '@shared/errors/BaseError'
import { Validation } from '@shared/protocols/validator'

export default class JoiAppValidation implements Validation {
  constructor(private readonly schema: ObjectSchema) {}
  async validate(data: any): Promise<Error | void> {
    const { error } = this.schema.validate(data)
    if (error) throw new BaseError(error.message)
  }
}
