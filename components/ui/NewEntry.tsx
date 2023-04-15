import { useState, useContext, ChangeEvent } from 'react';
import { EntriesContext } from '@/context/entries';

import { Box, Button, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';

export const NewEntry = () => {
 
    const [isAdding, setIsAdding] = useState(false);
    const [error,setError] = useState(false);
    const{addEntry} =useContext(EntriesContext);
    
    const [entry, setEntry] = useState({
        _id: '' ,
        description: '',
        status: 'pending',
        createdAt: Date.now(),}
    );

    const handleChange = (e:any) =>{
        setEntry({
            ...entry,
            [e.target.name]: e.target.value,
        });
    }
 
    const handleClick = (e:any) =>{
    
       if(entry.description.length === 0){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
           
       }else{
             addEntry(entry);
            setIsAdding(false);
            setEntry({
                _id : uuidv4(),
                description: '',
                status: 'pending',
                createdAt: Date.now(),
            })
       }
    }


    return (
    
    
    <Box sx={{
        marginBottom:2,
        paddingX:2

    }}>
        {
            isAdding
           ?   <>
           <TextField
       
           fullWidth
           placeholder="Nueva tarea"
           multiline
           autoFocus
           label="Nueva tarea"
           error={error ? true : false}
           helperText={error ? 'No agregaste ninguna tarea' : 'Escribe una nueva tarea'}
           name='description'
           onChange={(e)=>{
                handleChange(e)
           }}   
           sx={{
               marginTop:2,
               marginBottom:1,
           }}
           />
           
           <Box display='flex' justifyContent='space-between' sx={{
               marginBottom:2,
           }}>
           
           
           <Button 
           variant='text'
           color='primary'
           onClick={() => setIsAdding(false)} 
            >
               Cancelar
           </Button>
       
           <Button 
           onClick={(e)=>{
            handleClick(e);
           }}
           variant='outlined'
           color="secondary"
           endIcon={<SaveOutlinedIcon/>
           
        }
       >
               Guardar
           </Button>
           </Box>
           </>
           
           
         
            : 
            <Button
            startIcon={<AddCircleOutlineIcon/>}
            fullWidth
            variant="outlined"
            onClick={() => setIsAdding(true)}
            >
            Agregar Tarea
            </Button>            
           
        }
            </Box>
  )
}
