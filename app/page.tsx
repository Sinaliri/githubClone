"use client";
import Input from "@/Components/InputGenerator/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Mainpage.module.scss";
const Home = () => {
  const [Username, setUsername] = useState<string>("");
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
