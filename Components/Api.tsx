import React from "react";

const Api = async ({ params, Children }: any) => {
  console.log("ss", params);
  const data = await fetch(
    `https://api.github.com/users/${params.username}`,
    {}
  );
  return <Chilren data={data}></Chilren>;
};

export default Api;
