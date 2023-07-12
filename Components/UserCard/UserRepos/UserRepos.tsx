"use client";

import { IrepoDetail } from "@/src/t";
import styles from "./UserRepos.module.scss";
import { useContext, useEffect } from "react";
import RepoCard from "./RepoCard/RepoCard";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import { DataContext, IDataContext } from "@/Context/ContextProvier";

const UserRepos = (props: { repos: IrepoDetail[] }) => {
  const { repos } = props;
  const { sortedBy } = useContext<mainContextType>(MainContext);
  useEffect(() => {
    console.log(sortedBy);
  }, []);

  //   Sort by created_at date
  const sortedArray = repos?.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
  //   const starFilter = [...repos]?.sort(
  //     (a, b) => b.stargazers_count - a.stargazers_count
  //   );
  //   setRepo(starFilter);
  //   setRepo(sortedArray);

  //   console.log(repos);
  return (
    <>
      <span>{sortedBy}</span>
      <div className={`${styles.wrapper}`}>
        {repos?.map((item: IrepoDetail) => {
          return <RepoCard key={item.id} Repo={item} />;
        })}
      </div>
    </>
  );
};

export default UserRepos;
