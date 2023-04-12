
import { FC, useContext,useMemo,useState } from "react";
import { Paper,List } from "@mui/material";
import {EntryCard} from '@/components/ui/EntryCard';
import { Entry, EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";


interface Props{
    status:EntryStatus
}

export const EntryList:FC<Props>= ({status}) => {
    
    const{entries }=useContext(EntriesContext)
    const entriesByStatus = useMemo(()=>entries.filter(entry=>entry.status===status),[entries]);
    
    return (
    <div >
        <Paper sx={{
            // height:'calc(100vh - 250px)',
            
            backgroundColor: 'transparent',
            padding: '0px 12px',
        }}>

            <List sx={{
                opacity:1,
                transition: 'opacity 1s ease-in-out'
            }}>
            {entriesByStatus.map((entries,i)=>{
                    const{_id,description,status,createdAt}=entries;
                    return(
                    <EntryCard key={i} _id={_id} description={description} status={status} createdAt={createdAt} />
                    )
            })}
         
            </List>

        </Paper>

    </div>
  )
}
