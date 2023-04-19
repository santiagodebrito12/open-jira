import { FC, useContext, useMemo, useState, DragEvent } from 'react';
import { Paper,List } from "@mui/material";
import {EntryCard} from '@/components/ui/EntryCard';
import { Entry, EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { UiContext } from '@/context/ui';
import styles from './EntryList.module.css';

interface Props{
    status:EntryStatus
}

export const EntryList:FC<Props>= ({status}) => {
    const {isDragging,toggleDrag} = useContext(UiContext);
    const{entries,upDateEntry }=useContext(EntriesContext)
    
    const entriesByStatus = useMemo(()=>entries.filter(entry=>entry.status===status),[entries]);
     console.log(entriesByStatus);

    const onDropEntry = (ev:DragEvent<HTMLDivElement>) =>{
        const id = ev.dataTransfer.getData('text');
        const entryFilter = entries.find(entry=>entry._id===id)!;
        entryFilter.status = status;
        upDateEntry(entryFilter);
        toggleDrag(false);
    }

    const  allowDrop = (ev:DragEvent<HTMLDivElement>) =>{
        ev.preventDefault();
       
    }

    return (
    <div

    onDrop={onDropEntry}
    onDragOver={allowDrop}
    className={isDragging ? styles.dragging : ''}
   
   >
        <Paper sx={{
            // height:'calc(100vh - 250px)',
            
            backgroundColor: 'transparent',
            padding: '0px 12px',
        }}>

            <List sx={{
                opacity: isDragging ? 0.2 : 1,
                transition: 'all .1s ease-in-out'
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
