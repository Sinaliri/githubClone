"use client";
import Api from "@/Components/Api";
import { IrepoDetail } from "@/src/t";
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
  sortedBy: string;
  setSortedBy: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props: any) => {
  const [sortedBy, setSortedBy] = useState("sdfsdfsd");
  const [repos, setRepo] = useState<IrepoDetail[]>(props.repo || null);

  return (
    <Api>
      <MainContext.Provider
        value={{
          repos,
          setRepo,
          sortedBy,
          setSortedBy,
        }}
      >
        {props.children}
      </MainContext.Provider>
    </Api>
  );
};

export default MainProvider;
