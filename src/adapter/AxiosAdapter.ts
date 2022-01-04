import axios from "axios";
import { ICustomHttp } from "../interfaces/ICustomHttp";
import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";

export class AxiosAdapter implements ICustomHttp {
  public async get({ path, params }: Request): Promise<Response> {
    const response = await axios.get(path, { params });
    return new Response(response.data, response.status);
  }

  public async post({ path, params }: Request): Promise<Response> {
    const response = await axios.post(path, { params });
    return new Response(response.data, response.status);
  }

  public async put({ path, params }: Request): Promise<Response> {
    const response = await axios.put(path, { params });
    return new Response(response.data, response.status);
  }

  public async patch({ path, params }: Request): Promise<Response> {
    const response = await axios.patch(path, { params });
    return new Response(response.data, response.status);
  }

  public async delete({ path, params }: Request): Promise<Response> {
    const response = await axios.delete(path, { params });
    return new Response(response.data, response.status);
  }
}
