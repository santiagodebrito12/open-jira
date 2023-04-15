
import { useContext,DragEvent } from "react";
import { Entry } from "@/interfaces"
import { Box, Input,Card, CardActionArea, CardContent, Typography, CardActions } from "@mui/material"
import { UiContext } from "@/context/ui";

export const EntryCard = ({_id,description,status,createdAt}:Entry) => {
  
    const{isDragging,toggleDrag}=useContext(UiContext);

  const onDragStart=(ev:DragEvent<HTMLDivElement>) =>{

    ev.dataTransfer.setData('text', _id);
    toggleDrag(true);
    //modificar el estado para hacer drag


  }
  const onDragEnd = (ev:DragEvent<HTMLDivElement>) =>{
    toggleDrag(false);
  }

    return (
    <Card 
    sx={{
        margin: '12px 0px',
        
    }}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}>
        <CardActionArea>
            <CardContent>
                <Typography sx={{
                    whiteSpace: 'pre-line',
                }}>{description}</Typography>
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
