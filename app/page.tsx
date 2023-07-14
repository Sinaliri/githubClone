"use client";
import Input from "@/Components/InputGenerator/Input";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./Mainpage.module.scss";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
const Home = () => {
  const { Username, setUsername, setRepo } =
    useContext<mainContextType>(MainContext);
  const router = useRouter();
  const clickHandler = () => {
    setRepo([]);
    router.push(`./#/${Username}`);
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
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};
export default Home;
