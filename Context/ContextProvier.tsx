"use client";
import { IrepoDetail } from "@/src/t";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface IDataContext {
  repos: IrepoDetail[];
  setRepo: React.Dispatch<React.SetStateAction<IrepoDetail[]>>;
  sortedBy: string;
  setSortedBy: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext({} as IDataContext);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [sortedBy, setSortedBy] = useState("ssd");
  const [repos, setRepo] = useState<IrepoDetail[]>([]);

  return (
    <DataContext.Provider
      value={{
        repos,
        setRepo,
        sortedBy,
        setSortedBy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
