import React, {
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

type Props = {
  updateState: (newState: string) => void;
};
const Menubar = (props: { sortedoption: string; handler: any }) => {
  const { sortedoption, handler } = props;
  const { sortedBy, setSortedBy, repos, setRepo } =
    useContext<mainContextType>(MainContext);

  const [search, setSearch] = useState("");

  const handleForkClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortedBy(event.target.innerText);
    console.log(event.target.innerText);
    console.log(sortedBy);
  };
  const handleStarClick = () => {
    // Sort by stargazers count
    console.log(repos);
    const filteredByStars = repos?.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    setRepo(filteredByStars);
    console.log("clicked");
    console.log("sss", filteredByStars);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <Input
          type="text"
          name="Username"
          value={search}
          onChange={setSearch}
          placeholder="Filter by Name"
        />
        <div className={styles.filtered}>
          <span>sort by :</span>
          <div onClick={handleForkClick}>Fork</div>
          <div onClick={handleStarClick}>Stars</div>
          <div>Last Updated</div>
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
