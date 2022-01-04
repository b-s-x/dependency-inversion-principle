import { UserService } from "./service/UserService";
import { AxiosAdapter } from "./adapter/AxiosAdapter";
import { ICustomHttp } from "./interfaces/ICustomHttp";

const userServiceWithAxiosAdapter = (): UserService => {
  const axiosAdaper: ICustomHttp = new AxiosAdapter();
  const userService: UserService = new UserService(axiosAdaper);

  return userService;
};

const validGithubUsername = () => {
  return { username: "nativanando" };
};

const users = "https://jsonplaceholder.typicode.com/users/1";

const run = async () => {
  const userService = userServiceWithAxiosAdapter();
  // const user = validGithubUsername();
  const response = await userService.getUser(users, { status: "666" });
  console.log(1, response.data);
};

run();
