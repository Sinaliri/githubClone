"use client";
import Api from "@/Components/Api";
import { Idetail, IrepoDetail } from "@/src/t";
import React, { Dispatch, createContext, useState } from "react";

export type stateType = {
  locationData: {
    location: { lat: number; lon: number };
    regionAndCity: string;
  };
  contactId: string;
};

export type mainContextType = {
  repos: IrepoDetail[];
  setRepo: React.Dispatch<React.SetStateAction<IrepoDetail[]>>;
  detail: Idetail;
  setDetail: React.Dispatch<React.SetStateAction<Idetail>>;
  sortedBy: string;
  setSortedBy: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props: any) => {
  const [sortedBy, setSortedBy] = useState("Forks");
  const [repos, setRepo] = useState<IrepoDetail[]>(props.repo || null);
  const [detail, setDetail] = useState<Idetail>(props.detail || null);

  return (
    <MainContext.Provider
      value={{
        repos,
        setRepo,
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
