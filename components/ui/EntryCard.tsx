
import { Entry } from "@/interfaces"
import { Box, Input,Card, CardActionArea, CardContent, Typography, CardActions } from "@mui/material"

export const EntryCard = ({_id,description,status,createdAt}:Entry) => {
  return (
    <Card sx={{
        margin: '12px 0px',
        
    }}>
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
