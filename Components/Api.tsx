import React from "react";

const Api = async ({ params, Children }: any) => {
  console.log("ss", params);
  const data = await fetch(`https://api.github.com/users/${params.username}`, {
    next: { revalidate: 5 },
  });
  return <Children data={data}></Children>;
};

export default Api;
