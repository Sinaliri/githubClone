"use client";
import { IrepoDetail } from "../../assets/t";
import React, { useEffect, useState } from "react";
import RepoCard from "../UserCard/RepoCard/RepoCard";
import Input from "../InputGenerator/Input";
import styles from "./UserAllRepos.module.scss";

const UserAllRepos = (props: { repo: IrepoDetail[] }) => {
  const { repo } = props;
  const [search, setSearch] = useState("");
  const [filteredObjects, setFilteredObjects] = useState<IrepoDetail[]>([]);
  let sorteddata: IrepoDetail[];
  useEffect(() => {
    const filteredByStars = repo.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    sorteddata = filteredByStars.slice(0, 10);
    setFilteredObjects(sorteddata);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: any = event;
    setSearch(input);
    if (input.length >= 3) {
      const filteredArray = repo.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      );
      // console.log(search);
      setFilteredObjects(filteredArray);
    } else {
      setFilteredObjects(repo.slice(0, 10));
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.search}`}>
        <Input
          type="text"
          name="Search"
          value={search}
          onChange={handleInputChange}
          placeholder="Filter by Name"
          width="90%"
        />
      </div>
      {filteredObjects?.map((item: IrepoDetail) => (
        <RepoCard key={item.id} Repo={item} />
      ))}
    </div>
  );
};

export default UserAllRepos;
