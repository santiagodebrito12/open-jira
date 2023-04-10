
import { useContext } from 'react';

import {UiContext} from "@/context/ui";
import { AppBar,IconButton,Toolbar,Typography } from '@mui/material';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const NavBar = () => {

  const{toggleMenu} = useContext(UiContext)
  
  return (
    <AppBar position="sticky" >
        <Toolbar>
            <IconButton
            size='large'
            edge="start"
            onClick={()=>{
              toggleMenu()
            }}>
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant="h6">Open Jira</Typography>
        </Toolbar>
    </AppBar>
  )
}

