export type HttpResponse = {
  statusCode: number
  body?: any
}

export class createUserController {
  async handle(request: any): Promise<HttpResponse> {
    return { statusCode: 201, body: {"success": true,
    "message": "User successfully registered!"}}
  }
}
