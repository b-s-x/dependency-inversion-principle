import {
  CustomHttpRequest as Request,
  CustomHttpResponse as Response
} from "../CustomHttp";
import { CustomHttp, User } from "../interfaces";

const PUBLIC_URL = "https://api.github.com/users";

export class UserService {
  constructor(private readonly customHttpAdapter: CustomHttp) {}

  public searchGithubUser(user: User): Promise<Response> {
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