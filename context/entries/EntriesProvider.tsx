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
   
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
      {
       _id: uuidv4(),
        description:'lorem ipsum',
        createdAt: Date.now(),
        status:'pending',
      },
      {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'pending',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'pending',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'completed',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'completed',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'completed',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'progress',
       },
       {
        _id: uuidv4(),
         description:'lorem ipsum',
         createdAt: Date.now(),
         status:'progress',
       }
    ],
}


export const EntriesProvider = ({children}:EntriesProviderProps) => {
  
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

 
  
  

  return (
    <EntriesContext.Provider value={{
      
      entries:state.entries
      
    }}>
        {children}
    </EntriesContext.Provider>
  )
}
