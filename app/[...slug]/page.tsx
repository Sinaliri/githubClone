"use client";
import UserCard from "@/Components/UserCard/UserCard";
import { MainContext, mainContextType } from "@/Context/Procider/Provider";
import { useRouter } from "next/router";
import { useContext } from "react";

const Filter = ({ params }: { params: { slug: string } }) => {
  //   const router = useRouter();
  const { repos } = useContext<mainContextType>(MainContext);
  console.log(params);
  console.log(repos);

  return <div>{/* <UserCard /> */}</div>;
};

export default Filter;
