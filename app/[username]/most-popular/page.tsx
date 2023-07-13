import Input from "@/Components/InputGenerator/Input";
import UserAllRepos from "@/Components/UserAllRepos/UserAllRepos";
import UserRepos from "@/Components/UserCard/UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "@/src/t";

const PopularRepo = async ({ params }: any) => {
  console.log(params.username);
  try {
    const UserPopularReository = await fetch(
      `https://api.github.com/users/${params.username}/repos`
    );
    const data = await UserPopularReository.json();

    return <div>{data ? <UserAllRepos repo={data} /> : "user not found"}</div>;
  } catch (error: any) {
    console.log("Fetch Error:", error);
    // You can handle the error here, e.g., return an error message
    return <div>Error: usernotfound</div>;
  }
};

export default PopularRepo;
