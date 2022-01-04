import { UserService } from "./service/UserService";
import { AxiosAdapter } from "./adapter/AxiosAdapter";
import { CustomHttp } from "./interfaces";
import { USER_GITHUB } from './constants';

const userServiceWithAxiosAdapter = (): UserService => {
  const axiosAdapter: CustomHttp = new AxiosAdapter();
  const userService: UserService = new UserService(axiosAdapter);

  return userService;
};

const run = async () => {
  const userService = userServiceWithAxiosAdapter();
  const responseUserGithub = await userService.searchGithubUser(USER_GITHUB);
  const response = await userService.getUser({ status: "666" });
  console.log(1, response.data);
  console.log(2, responseUserGithub.data);
};

run();
