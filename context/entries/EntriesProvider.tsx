import { useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { EntriesReducer } from "./EntriesReducer";
import { Entry } from "@/interfaces";
import {v4 as uuidv4} from 'uuid';


export interface EntriesState{
    entries: Array<Entry>;
    
  
}
interface EntriesProviderProps {
    children: React.ReactNode;
    addEntry:Function;
   
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
      
    ],
}


export const EntriesProvider = ({children}:EntriesProviderProps) => {
  
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (entry:Entry) => {
    dispatch({
      type: 'SET_NEW_ENTRY',
      payload: entry,
    })
  }

  const upDateEntry = (entry:Entry) => {
    dispatch({
      type: 'ENTRY_UPDATED',
      payload: entry,
    })
  }
  

  return (
    <EntriesContext.Provider value={{
      entries:state.entries,
      addEntry:addEntry,
      upDateEntry:upDateEntry,
    }}>
        {children}
    </EntriesContext.Provider>
  )
}
