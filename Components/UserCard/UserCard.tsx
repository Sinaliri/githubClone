"use client";
import DetailSection from "./DetailSection/DetailSection";
import styles from "./UserCard.module.scss";
import UserRepos from "./UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "../../src/t";
import { useContext, useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
const UserCard = (props: { detail: Idetail; repo: IrepoDetail[] }) => {
  const { setUsername } = useContext<mainContextType>(MainContext);
  useEffect(() => {
    setUsername(props.detail.login);
  }, []);

  const [sortedoption, setSortedOption] = useState("");

  return (
    <div className={`${styles.Container}`}>
      <DetailSection detail={props.detail} />
      <div className={`${styles.side}`}>
        <Menubar sortedoption={sortedoption} />
        <UserRepos repos={props.repo} />
      </div>
    </div>
  );
};

export default UserCard;
