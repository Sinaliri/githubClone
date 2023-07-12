import UserCard from "@/Components/UserCard/UserCard";
import { mainContextType } from "@/Context/Procider/Provider";
import { Userprofile_get } from "@/Services/Api";
import { useContext } from "react";
const UserInfo = async ({ params }: any) => {
  console.log("ss", params);
  const data = await fetch(`https://api.github.com/users/${params.username}`, {
    next: { revalidate: 5 },
  });
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
  console.log(Repository);
  return (
    <div>
      <UserCard detail={detail} repo={Repository} />
    </div>
  );
};
// export async function getServerSideProps(context) {
//   console.log("context", context);
//   // Get user id
//   const User = await fetch(
//     `https://api.github.com/users/${context.query.username}`
//   );

//   return {
//     props: { User }, // will be passed to the page component as props
//   };
// }
// UserInfo.getInitialProps = async (ctx) => {
//   console.log("ctx", ctx);
//   const data = await fetch(
//     `https://api.github.com/users/${ctx.query.username}`
//   );
//   return data;
// };
export default UserInfo;
