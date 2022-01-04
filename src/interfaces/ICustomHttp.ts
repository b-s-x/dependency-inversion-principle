import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";

export interface ICustomHttp {
  get(request: Request): Promise<Response>;
  post(request: Request): Promise<Response>;
  put(request: Request): Promise<Response>;
  patch(request: Request): Promise<Response>;
  delete(request: Request): Promise<Response>;
}
