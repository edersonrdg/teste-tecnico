export interface Validation<T = any> {
  validate: (data: T) => Error | void
}
