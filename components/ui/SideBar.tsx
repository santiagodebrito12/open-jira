import { useContext } from "react";
import {Drawer,Box, Typography, List, ListItem, ListItemIcon,ListItemText, Divider} from "@mui/material";
import {UiContext} from "@/context/ui";

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
const menuItems:string[] = ['Inbox','Starred','Send Email', 'Drafts']

export const SideBar = () => {
  
 const { sideMenuOpen,toggleMenu } = useContext(UiContext)
  
  
  
  return (
    <Drawer 
    anchor="left"
    open={sideMenuOpen}
    variant="persistent"
    onClose={()=>{
      toggleMenu()
    }}
  
    sx={{
      position: 'sticky',
      top: '100px',
      zIndex: 1000,
    }}
    
   >
    <Box sx={{width:250}}>
    <Box sx={{
    padding: '5px 10px', 
    position: 'absolute',
    top: '64px',
   }}>
   
      <List>
        {menuItems.map((item,index) => (
          <ListItem key={index} >
           <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
           </ListItemIcon>
           <ListItemText primary={item} />
          </ListItem>
        ))}

      </List>
   </Box>
    </Box>
   <Divider/>
    
    </Drawer>
  )
}
