import UserAllRepos from "@/Components/UserAllRepos/UserAllRepos";

const PopularRepo = async ({ params }: any) => {
  try {
    const UserPopularReository = await fetch(
      `https://api.github.com/users/${params.username}/repos`
    );
    const data = await UserPopularReository.json();
    return <div>{data ? <UserAllRepos repo={data} /> : "user not found"}</div>;
  } catch (error: any) {
    return <div>Error: usernotfound</div>;
  }
};

export default PopularRepo;
