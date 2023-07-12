import axios from "axios";

export const url = "https://api.github.com/users/";
export const base_url = url;
let defaultApi = axios.create({
  baseURL: base_url,
});
export const Userprofile_get = (Username: string) => {
  return defaultApi({
    method: "get",
    url: `${base_url}${Username}`,
  })
    .then((res) => res)
    .catch((err) => err);
};
