"use client";

import { IrepoDetail } from "@/src/t";
import styles from "./UserRepos.module.scss";
import { useState } from "react";
import RepoCard from "./RepoCard/RepoCard";

const UserRepos = (props: { repo: IrepoDetail }) => {
  const [repos, setRepo] = useState(props.repo || null);
  console.log(repos);
  return (
    <div>
      {repos.map((item) => {
        return <RepoCard key={item.id} Repo={item} />;
      })}
    </div>
  );
};

export default UserRepos;
