import { ObjectSchema } from '@hapi/joi';
import { BaseError } from '@shared/errors/BaseError'
import { Validation } from '@shared/protocols/validator'

export class JoiAppValidation implements Validation {
  constructor(private readonly schema: ObjectSchema) {}
  validate(data: any): Error | void {
    const { error } = this.schema.validate(data)
    if (error) throw new BaseError(error.message)
  }
}
