import React, { ReactNode, useState } from "react";
import styles from "./Menubar.module.scss";
import Input from "../InputGenerator/Input";

const Menubar = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.searchbar}`}>
        <Input
          type="text"
          name="Username"
          value={search}
          onChange={setSearch}
        />{" "}
        <button>sort</button>
      </div>
      {children}
    </div>
  );
};

export default Menubar;
