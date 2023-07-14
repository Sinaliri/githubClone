import React, {
  HTMLAttributes,
  HtmlHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useContext,
  useState,
} from "react";
import styles from "./Menubar.module.scss";
import Input from "../InputGenerator/Input";
import { IrepoDetail } from "../../assets/t";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import { useRouter } from "next/navigation";

type Props = {
  updateState: (newState: string) => void;
};
const Menubar = (props: { sortedoption: string }) => {
  const router = useRouter();
  const { sortedoption } = props;
  const {
    sortedBy,
    setSortedBy,
    repos,
    setRepo,
    search,
    setSearch,
    setFilteredObjects,
    Username,

    filteredObjects,
  } = useContext<mainContextType>(MainContext);
  const handleForkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortedBy(event?.currentTarget.innerText);
  };
  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortedBy(event?.currentTarget.innerText);
  };
  const handleTime = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Sort by stargazers count
    setSortedBy(event?.currentTarget.innerText);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: any = event;
    setSearch(input);
    if (input.length >= 3) {
      setSortedBy("");
      const filteredArray = [...repos].filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      );
      // console.log(search);
      setFilteredObjects(filteredArray);
    } else {
      setSortedBy("Forks");
      setFilteredObjects(repos);
    }
  };
  const handle = () => {
    console.log(Username);
    router.push(`/${Username}/most-popular`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <Input
          type="text"
          name="Search"
          value={search}
          onChange={handleInputChange}
          placeholder="Filter by Name"
        />
        <div className={styles.filtered}>
          <span>sort by :</span>
          <button onClick={handleForkClick} data-sort="Forks">
            Forks
          </button>
          <button onClick={handleStarClick} data-sort="Stars">
            Stars
          </button>
          <button onClick={handleTime} data-sort="Last Updated">
            Last Updated
          </button>
          <button onClick={handle} data-sort="Most Popular">
            Most Popular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
