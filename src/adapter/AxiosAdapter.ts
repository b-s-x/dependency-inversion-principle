import axios from "axios";
import { ICustomHttp } from "../interfaces/ICustomHttp";
import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";

export class AxiosAdapter implements ICustomHttp {
  public async get(request: Request, params: object): Promise<Response> {
    console.log(1, request, params);

    const response = await axios.get(request.path, params);
    return new Response(response.data, response.status);
  }

  public async post(request: Request): Promise<Response> {
    const response = await axios.post(request.path, request.params);
    return new Response(response.data, response.status);
  }

  public async put(request: Request): Promise<Response> {
    const response = await axios.put(request.path, request.params);
    return new Response(response.data, response.status);
  }

  public async patch(request: Request): Promise<Response> {
    const response = await axios.patch(request.path, request.params);
    return new Response(response.data, response.status);
  }

  public async delete(request: Request): Promise<Response> {
    const response = await axios.delete(request.path);
    return new Response(response.data, response.status);
  }
}
