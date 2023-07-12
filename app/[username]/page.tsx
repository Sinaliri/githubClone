import UserCard from "@/Components/UserCard/UserCard";
import { Userprofile_get } from "@/Services/Api";
const UserInfo = async ({ params }: any) => {
  console.log(params.username);
  const data = await fetch(`https://api.github.com/users/${params.username}`);
  const detail = (await data.json()) as {
    login: string;
    avatar_url: string;
    url: string;
    public_repos: number;
    repos_url: string;
    name: string;
    html_url: string;
  };
  console.log(detail.public_repos);
  const repositories = await fetch(detail.repos_url);
  const Repository = await repositories.json();
  // console.log(Repository);
  return (
    <div>
      <UserCard detail={detail} repo={Repository} />
    </div>
  );
};

export default UserInfo;
