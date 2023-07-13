"use client";
import DetailSection from "./DetailSection/DetailSection";
import styles from "./UserCard.module.scss";
import UserRepos from "./UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "../../src/t";
import { useContext, useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
const UserCard = (props: { detail: Idetail; repo: IrepoDetail[] }) => {
  const { repos, setRepo } = useContext<mainContextType>(MainContext);
  useEffect(() => {
    setRepo(props.repo);
  }, []);

  //   const [Repositories, setRepositories] = useState(props.repo);
  const [sortedoption, setSortedOption] = useState("");
  //   const handleUpdateState = (newState: IrepoDetail[]) => {
  //     setRepositories(newState);
  //   };
  console.log("usercard", repos);
  const handler = (newstr: string) => {
    setSortedOption(newstr);
  };
  return (
    <div className={`${styles.Container}`}>
      <DetailSection detail={props.detail} />
      <div className={`${styles.side}`}>
        <Menubar sortedoption={sortedoption} handler={handler} />
        <UserRepos repos={props.repo} />
      </div>
    </div>
  );
};

export default UserCard;
