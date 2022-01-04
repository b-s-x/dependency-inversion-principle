import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";
import { ICustomHttp } from "../interfaces/ICustomHttp";

const PUBLIC_URL = "https://api.github.com/users";

export interface IUser {
  username: string;
}

export class UserService {
  constructor(private readonly customHttpAdapter: ICustomHttp) {}

  public searchGithubUser(user: IUser): Promise<Response> {
    const response: Promise<Response> = this.customHttpAdapter.get(
      new Request(`${PUBLIC_URL}/${user.username}`)
    );
    return response;
  }

  public getUser(params?: any) {
    const response: Promise<Response> = this.customHttpAdapter.get(
      new Request("https://jsonplaceholder.typicode.com/users/1", params)
    );

    return response;
  }
}