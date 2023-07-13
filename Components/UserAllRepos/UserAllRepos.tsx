"use client";
import { IrepoDetail } from "@/src/t";
import React, { useEffect, useState } from "react";
import RepoCard from "../UserCard/UserRepos/RepoCard/RepoCard";
import Input from "../InputGenerator/Input";
import styles from "./UserAllRepos.module.scss";

const UserAllRepos = (props: { repo: any }) => {
  useEffect(() => {});
  const { repo } = props;
  const [search, setSearch] = useState("");
  const filteredByStars = [...repo]?.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );
  const sorteddata = filteredByStars.slice(0, 10);
  const [filteredObjects, setFilteredObjects] = useState(sorteddata);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: any = event;
    setSearch(input);

    if (input.length >= 3) {
      const filteredArray = sorteddata.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      );
      // console.log(search);
      setFilteredObjects(filteredArray);
    } else {
      setFilteredObjects(sorteddata);
    }
    console.log("FilteredObjects", filteredObjects);
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
      {filteredObjects?.map((item: IrepoDetail) => {
        return <RepoCard key={item.id} Repo={item} />;
      })}
    </div>
  );
};

export default UserAllRepos;
