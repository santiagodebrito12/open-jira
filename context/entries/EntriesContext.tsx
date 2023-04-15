import { Entry } from "@/interfaces";
import { createContext } from "react";

export interface ContextProps {
   
    entries:Entry[],
    addEntry:Function,
    upDateEntry:Function;

}

export const EntriesContext = createContext({} as ContextProps);