import UserAllRepos from "@/Components/UserAllRepos/UserAllRepos";

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
    return <div>Error: usernotfound</div>;
  }
};

export default PopularRepo;
