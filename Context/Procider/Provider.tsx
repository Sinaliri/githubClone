"use client";
import { Idetail, IrepoDetail } from "@/src/t";
import React, { Dispatch, createContext, useState } from "react";

export type mainContextType = {
  repos: IrepoDetail[];
  setRepo: React.Dispatch<React.SetStateAction<IrepoDetail[]>>;
  filteredObjects: IrepoDetail[];
  setFilteredObjects: React.Dispatch<React.SetStateAction<IrepoDetail[]>>;
  detail: Idetail;
  setDetail: React.Dispatch<React.SetStateAction<Idetail>>;
  sortedBy: string;
  setSortedBy: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props: any) => {
  const [sortedBy, setSortedBy] = useState("Forks");
  const [search, setSearch] = useState<string>("Forks");
  const [repos, setRepo] = useState<IrepoDetail[]>(props.repo || null);
  const [filteredObjects, setFilteredObjects] = useState<IrepoDetail[]>(
    props.repo || null
  );
  const [detail, setDetail] = useState<Idetail>(props.detail || null);

  return (
    <MainContext.Provider
      value={{
        repos,
        setRepo,
        filteredObjects,
        setFilteredObjects,
        search,
        setSearch,
        detail,
        setDetail,
        sortedBy,
        setSortedBy,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
