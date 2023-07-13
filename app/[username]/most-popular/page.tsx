import Input from "@/Components/InputGenerator/Input";
import UserAllRepos from "@/Components/UserAllRepos/UserAllRepos";
import UserRepos from "@/Components/UserCard/UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "@/src/t";

const PopularRepo = async ({ params }: any) => {
  console.log(params);
  const UserPopularReository = await fetch(
    `https://api.github.com/users/${params.username}/repos`
  );
  const data = await UserPopularReository.json();
  console.log(data);

  return (
    <div>
      <UserAllRepos repo={data} />;
    </div>
  );
};

export default PopularRepo;
