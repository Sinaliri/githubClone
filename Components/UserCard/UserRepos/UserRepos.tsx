"use client";

import { IrepoDetail } from "@/src/t";
import styles from "./UserRepos.module.scss";
import { useContext, useEffect } from "react";
import RepoCard from "./RepoCard/RepoCard";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import { DataContext, IDataContext } from "@/Context/ContextProvier";

const UserRepos = () => {
  // const { repos } = useContext<>;
  const { repos, sortedBy, setRepo } = useContext<mainContextType>(MainContext);
  useEffect(() => {
    console.log("new", repos);
    console.log("sortedBy", sortedBy);
  }, [sortedBy]);

  //   Sort by created_at date
  const filteredbyTime = repos?.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
  const filteredByForks = [...repos]?.sort(
    (a, b) => b.forks_count - a.forks_count
  );
  const filteredByStars = [...repos]?.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );
  return (
    <>
      {sortedBy === "Forks" && (
        <div className={`${styles.wrapper}`}>
          {filteredByForks?.map((item: IrepoDetail) => {
            return <RepoCard key={item.id} Repo={item} />;
          })}
        </div>
      )}
      {sortedBy === "Stars" && (
        <div className={`${styles.wrapper}`}>
          {filteredByStars?.map((item: IrepoDetail) => {
            return <RepoCard key={item.id} Repo={item} />;
          })}
        </div>
      )}
      {sortedBy === "Last Updated" && (
        <div className={`${styles.wrapper}`}>
          {filteredbyTime?.map((item: IrepoDetail) => {
            return <RepoCard key={item.id} Repo={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default UserRepos;
