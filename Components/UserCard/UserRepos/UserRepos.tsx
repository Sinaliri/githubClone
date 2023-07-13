"use client";

import { IrepoDetail } from "../../../assets/t";
import styles from "./UserRepos.module.scss";
import { useContext, useEffect } from "react";
import RepoCard from "../RepoCard/RepoCard";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
const UserRepos = (props: { repos: IrepoDetail[] }) => {
  const { repos } = props;
  // console.log(repo);

  const { setRepo, sortedBy, search, filteredObjects } =
    useContext<mainContextType>(MainContext);
  useEffect(() => {
    setRepo(props.repos);
    console.log("sortedBy", sortedBy);
  }, [sortedBy, search]);
  console.log(repos);
  const filteredByForks = [...repos]?.sort(
    (a, b) => b.forks_count - a.forks_count
  );

  const filteredbyTime = [...repos]?.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
  console.log(filteredbyTime);

  const filteredByStars = [...repos]?.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  //filtered by name

  return (
    <>
      {sortedBy == "Forks" && (
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
      {filteredObjects && sortedBy === "" && (
        <div className={`${styles.wrapper}`}>
          {filteredObjects?.map((item: IrepoDetail) => {
            return <RepoCard key={item.id} Repo={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default UserRepos;
