import { HttpResponse } from "./http";

export interface Controller<T = any> {
  handle: (_: T) => Promise<HttpResponse>
}
