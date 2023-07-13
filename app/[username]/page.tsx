"use client";
import UserCard from "@/Components/UserCard/UserCard";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import axios from "axios";
import { useContext, useEffect } from "react";
const UserInfo = ({ params }: any) => {
  const { repos, setRepo, detail, setDetail } =
    useContext<mainContextType>(MainContext);
  console.log("username", params);
  
  useEffect(() => {
      if(!repos){
      const fetchdata = async () => {
        await axios
        .get(`https://api.github.com/users/${params.username}`)
        .then((res) => {
          console.log("axios", res.data);
          setDetail(res.data);
          axios.get(res.data.repos_url).then((detailres) => {
            console.log("detail", detailres);
            setRepo(detailres.data);
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    };

    fetchdata();
  }
  }, []);
  // console.log(detail.public_repos);
  // const repositories = await fetch(detail.repos_url);
  // const Repository = await repositories.json();
  // localStorage.setItem("repos", JSON.stringify(Repository));
  // localStorage.setItem("userinfo", JSON.stringify(detail));
  // console.log(Repository);
  return (
    <div>
      {detail && repos ? (
        <UserCard detail={detail} repo={repos} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserInfo;
