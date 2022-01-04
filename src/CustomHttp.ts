export class CustomHttpRequest {
  constructor(public path: string, public params?: any, public token?: string) {
    this.path = path;
    this.params = params;
    this.token = token;
  }
}

export class CustomHttpResponse {
  constructor(public data: any, public status: number) {
    this.data = data;
    this.status = status;
  }
}
