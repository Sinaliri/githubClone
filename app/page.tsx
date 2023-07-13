"use client";
import Input from "@/Components/InputGenerator/Input";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import styles from "./Mainpage.module.scss";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
const Home = () => {
  const { Username, setUsername } = useContext<mainContextType>(MainContext);
  const [UserInfo, setUserInfo] = useState({});
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/${Username}`);
  };
  return (
    <div className={`${styles.Container}`}>
      <Input
        type="text"
        name="Username"
        value={Username}
        onChange={setUsername}
        placeholder="Enter Correct UserName"
        height="100px"
      />
      <button onClick={clickHandler}>Search</button>
      {/* href={`/${Username}`} */}
    </div>
  );
};
export default Home;
