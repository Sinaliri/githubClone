import { type } from "os";

interface Idetail {
  login: string;
  avatar_url: string;
  url: string;
  public_repos: number;
  repos_url: string;
}
interface IrepoDetail {
  name: string;
  id: number;
  url: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  visibility: string;
  language: string;
}
export type { Idetail, IrepoDetail };
