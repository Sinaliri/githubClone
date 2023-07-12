"use client";

import { IrepoDetail } from "@/src/t";
import styles from "./UserRepos.module.scss";
import { useState } from "react";
import RepoCard from "./RepoCard/RepoCard";

const UserRepos = (props: { repo: IrepoDetail }) => {
  const [repos, setRepo] = useState<IrepoDetail[]>(props.repo || null);

  // Sort by forks count
  const forkFilter = [...repos].sort((a, b) => b.forks_count - a.forks_count);

  // Sort by stargazers count
  const starFilter = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  // Sort by created_at date
  const sortedArray = [...repos].sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  console.log(starFilter);
  console.log(repos);
  return (
    <div className={`${styles.wrapper}`}>
      {starFilter.map((item: IrepoDetail) => {
        return <RepoCard key={item.id} Repo={item} />;
      })}
    </div>
  );
};

export default UserRepos;
