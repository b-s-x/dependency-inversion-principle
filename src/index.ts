import { UserService } from "./service/UserService";
import { AxiosAdapter } from "./adapter/AxiosAdapter";
import { ICustomHttp } from "./interfaces/ICustomHttp";

const userServiceWithAxiosAdapter = (): UserService => {
  const axiosAdapter: ICustomHttp = new AxiosAdapter();
  const userService: UserService = new UserService(axiosAdapter);

  return userService;
};

const userGitHub = { username: "b-s-x" };

const run = async () => {
  const userService = userServiceWithAxiosAdapter();
  const responseUserGithub = await userService.searchGithubUser(userGitHub);
  const response = await userService.getUser({ status: "666" });
  console.log(1, response.data);
  console.log(2, responseUserGithub.data);
};

run();
