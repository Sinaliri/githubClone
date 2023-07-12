"use client";
import DetailSection from "./DetailSection/DetailSection";
import styles from "./UserCard.module.scss";
import UserRepos from "./UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "../../src/t";
import { useState } from "react";
import Menubar from "../Menubar/Menubar";
const UserCard = (props: { detail: Idetail; repo: IrepoDetail }) => {
  const [repositories, setRepositories] = useState(props.repo);
  return (
    <div className={`${styles.Container}`}>
      <DetailSection detail={props.detail} />
      <Menubar>
        <UserRepos repo={repositories} />
      </Menubar>
    </div>
  );
};

export default UserCard;
