import { FC, useContext, useMemo, useState, DragEvent } from 'react';
import { Paper,List } from "@mui/material";
import {EntryCard} from '@/components/ui/EntryCard';
import { Entry, EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { UiContext } from '@/context/ui';
import styles from './EntryList.module.css';
import entriesApi from '@/apis/entriesApi';
interface Props{
    status:EntryStatus
}

export const EntryList:FC<Props>= ({status}) => {
    const{getEntries}=useContext(EntriesContext);

    const {isDragging,toggleDrag} = useContext(UiContext);
    const{entries,upDateEntry }=useContext(EntriesContext)
    
    const entriesByStatus = useMemo(()=>entries.filter(entry=>entry.status===status),[entries]);
  

    const onDropEntry = (ev:DragEvent<HTMLDivElement>) =>{
        const id = ev.dataTransfer.getData('text');
        // const entryFilter = entries.find(entry=>entry._id===id)!;
        // entryFilter.status = status;
        // upDateEntry(entryFilter);
        upDateEntrys(id);
        
        toggleDrag(false);
    }
    
    const upDateEntrys = async(id:any) =>{
        try {
            const{data}=await entriesApi.put(`/entries/${id}`,{
              status:status,
            })
            getEntries();
            
        } catch (error) {
          console.log(error) 
        }
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
