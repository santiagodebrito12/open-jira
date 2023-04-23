
import { useContext,DragEvent,useState,ChangeEvent } from "react";
import { Entry } from "@/interfaces"
import { Box, Input,Card, CardActionArea, CardContent, Typography, CardActions, CardHeader, Button, TextField } from "@mui/material"
import { UiContext } from "@/context/ui";

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import entriesApi from "@/apis/entriesApi";
import { EntriesContext } from "@/context/entries";

export const EntryCard = ({_id,description,status,createdAt}:Entry) => {
    const{ getEntries} = useContext(EntriesContext);
    const [newDescription,setNewDescription] = useState(description); 
    const{isDragging,toggleDrag}=useContext(UiContext);
    const [isEditing, setIsEditing] = useState<Boolean>(false)
    const onDragStart=(ev:DragEvent<HTMLDivElement>) =>{

    ev.dataTransfer.setData('text', _id);
    toggleDrag(true);
    //modificar el estado para hacer drag


  }
  const onDragEnd = (ev:DragEvent<HTMLDivElement>) =>{
    toggleDrag(false);
  }

  const handleChange = (ev:any) =>{
      setNewDescription(ev.target.value);
  }
  const deleteEntry = async(event:any) =>{

 
      try {
     
      const {data} = await entriesApi.delete<Entry>(`/entries/${_id}`);
      getEntries();


      } catch (error) {
       console.log(error); 
      }   
  }
  const upDateEntry = async() =>{
    try {
        const{data}=await entriesApi.put(`/entries/${_id}`,{
          description:newDescription,
        })
        getEntries();
        console.log(data);
    } catch (error) {
      console.log(error) 
    }
  }
    return (
    <Card 
    sx={{
        margin: '12px 0px',
        
    }}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}>
    
    <CardActions sx={{
      display:'flex',
      justifyContent:'end',
    }}>
      {isEditing
      ?  <Button
          color="success"
          onClick={()=>{
            upDateEntry();
            setIsEditing(false);
          }}>     
        <SaveOutlinedIcon/>
        </Button>
 
         
        : <Button 
        color="success" 
        onClick={()=>{
          setIsEditing(true)
        }}
        >
          <EditOutlinedIcon/>
          </Button>
      }
     
 
    
     
    <Button color="error" onClick={(event)=>{
      deleteEntry(event);
    }}>
   
      <DeleteForeverOutlinedIcon/>
   
    </Button>

    </CardActions>
        <CardActionArea>
            <CardContent>
              
                 
              {isEditing 
              ? <TextField
       
              fullWidth
              value={newDescription}
              multiline
              autoFocus
              
              // error={error ? true : false}
              // helperText={error ? 'No agregaste ninguna tarea' : 'Escribe una nueva tarea'}
              name='newDescription'
              aria-placeholder={description}
              sx={{
                  marginTop:2,
                  marginBottom:1,
              }}
              onChange={(ev)=>{
                handleChange(ev)
              }}
             />
 
              :  <Typography sx={{
                whiteSpace: 'pre-line',
            }}>{description}</Typography>
            }
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                <Typography variant="body2" >{createdAt}</Typography>
            </CardActions>
        </CardActionArea>
        
    </Card>
  )
}
