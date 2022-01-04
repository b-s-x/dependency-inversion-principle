import { CustomHttp } from "../interfaces";
import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";

export class FetchAdapter implements CustomHttp {
  public async get(request: Request): Promise<Response> {
    const response = await fetch(request.path);
    const data = await response.json();

    return new Response(data, response.status);
  }

  public async post(request: Request): Promise<Response> {
    const response = await fetch(request.path, {
      method: "POST",
      body: JSON.stringify(request.params)
    });
    const data = await response.json();

    return new Response(data, response.status);
  }

  public async put(request: Request): Promise<Response> {
    const response = await fetch(request.path, {
      method: "PUT",
      body: JSON.stringify(request.params)
    });
    const data = await response.json();
    return new Response(data, response.status);
  }

  public async patch(request: Request): Promise<Response> {
    const response = await fetch(request.path, {
      method: "PATCH",
      body: JSON.stringify(request.params)
    });
    const data = await response.json();

    return new Response(data, response.status);
  }

  public async delete(request: Request): Promise<Response> {
    const response = await fetch(request.path, {
      method: "DELETE",
      body: JSON.stringify(request.params)
    });
    const data = await response.json();

    return new Response(data, response.status);
  }
}
