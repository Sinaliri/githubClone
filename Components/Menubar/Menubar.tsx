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
  const { sortedBy, setSortedBy, repos, setRepo } =
    useContext<mainContextType>(MainContext);

  const [search, setSearch] = useState("");

  const handleForkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const fork = [...repos]?.sort((a, b) => b.forks_count - a.forks_count);
    setSortedBy(event?.currentTarget.innerText);
    setRepo(fork);
  };
  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Sort by stargazers count
    console.log(repos);
    const filteredByStars = [...repos]?.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    setRepo(filteredByStars);
    setSortedBy(event?.currentTarget.innerText);
    console.log("clicked");
    console.log("star", filteredByStars);
  };
  const handleTime = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Sort by stargazers count
    console.log(repos);
    const sortedArray = repos?.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
    setRepo(sortedArray);
    setSortedBy(event?.currentTarget.innerText);
    console.log("clicked");
    console.log("updated by time", sortedArray);
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
