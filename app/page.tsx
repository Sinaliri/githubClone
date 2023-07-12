"use client";
import Input from "@/Components/InputGenerator/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Home = () => {
  const [Username, setUsername] = useState<string>("");
  const [UserInfo, setUserInfo] = useState({});
  const router = useRouter();
  const clickHandler = () => {
    const searchoption = Username.trim();
    router.push(`/${searchoption}`);
  };
  return (
    <div>
      <Input
        label="UserName"
        type="text"
        name="Username"
        value={Username}
        onChange={setUsername}
      />
      <button onClick={clickHandler}>Search</button>
      {/* href={`/${Username}`} */}
    </div>
  );
};
export default Home;
