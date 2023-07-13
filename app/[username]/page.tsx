import UserCard from "@/Components/UserCard/UserCard";

const UserInfo = async ({ params }: any) => {
  console.log("ss", params);
  try {
    const data = await fetch(`https://api.github.com/users/${params.username}`);
    const detail = await data.json();

    console.log(detail.public_repos);

    const repositories = await fetch(detail.repos_url);
    const Repository = await repositories.json();

    console.log(Repository);

    return (
      <div>
        <UserCard detail={detail} repo={Repository} />
      </div>
    );
  } catch (error) {
    console.log("Fetch Error:", error);
    // You can handle the error here, e.g., return an error message
    return <div style={{ color: "#fff" }}>Error: user not found</div>;
  }
};

export default UserInfo;
