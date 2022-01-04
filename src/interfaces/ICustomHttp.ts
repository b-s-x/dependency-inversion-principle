import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";

export interface ICustomHttp {
  get(request: Request, params?: object): Promise<Response>;
  post(request: Request, params?: object): Promise<Response>;
  put(request: Request, params?: object): Promise<Response>;
  patch(request: Request, params?: object): Promise<Response>;
  delete(request: Request, params?: object): Promise<Response>;
}
