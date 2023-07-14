"use client";
import Input from "@/Components/InputGenerator/Input";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./Mainpage.module.scss";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import Link from "next/link";
const Home = () => {
  const { Username, setUsername, setRepo } =
    useContext<mainContextType>(MainContext);
  const router = useRouter();
  const clickHandler = () => {
    setRepo([]);
  };
  return (
    <div className={`${styles.Container}`}>
      <Input
        type="text"
        name="Username"
        value={Username}
        onChange={setUsername}
        placeholder="Enter Correct Github ID"
        height="100px"
      />
      <Link
        className={`${styles.link}`}
        href={`./${Username}`}
        onClick={clickHandler}
      >
        Search user
      </Link>
    </div>
  );
};
export default Home;
