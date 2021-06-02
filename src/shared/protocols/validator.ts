export interface Validation {
  validate: (data: any) => Promise<Error | void>
}
