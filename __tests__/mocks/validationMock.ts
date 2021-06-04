import { Validation } from "@shared/protocols/validator";

export const makeValidation = () => {
  class ValidationSignUpStub implements Validation {
    validate(data: any): Error | void {
    }
  }
  return new ValidationSignUpStub();
};
