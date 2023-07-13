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
import { IrepoDetail } from "@/src/t";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import { DataContext, IDataContext } from "@/Context/ContextProvier";
import { useRouter } from "next/navigation";

type Props = {
  updateState: (newState: string) => void;
};
const Menubar = (props: { sortedoption: string; handler: any }) => {
  const router = useRouter();
  const { sortedoption, handler } = props;
  const {
    sortedBy,
    setSortedBy,
    repos,
    setRepo,
    search,
    setSearch,
    setFilteredObjects,
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
    console.log();
    const input: any = event.target.value;
    setSearch(input);
    console.log(search);
    if (search.length >= 2) {
      setSortedBy("");
      const filteredArray = repos.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      );
      // console.log(search);
      setFilteredObjects(filteredArray);
    } else {
      setSortedBy("Forks");
      setFilteredObjects(repos);
    }
    console.log("FilteredObjects", filteredObjects);
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
        </div>
      </div>
    </div>
  );
};

export default Menubar;

// const forkFilter = [...repos].sort((a, b) => b.forks_count - a.forks_count);
// setRepo(forkFilter);
// console.log("clicked");
// console.log(forkFilter);
// const handleForkClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setSortedBy(event.target.value);
//   console.log(event.target.innerText);
//   console.log(sortedBy);
// };
// const handleStarClick = () => {
//   // Sort by stargazers count
//   console.log(repos);
//   const starFilter = [...repos]?.sort(
//     (a, b) => b.stargazers_count - a.stargazers_count
//   );
//   setRepo(starFilter);
//   console.log("clicked");
//   console.log(starFilter);
// };
