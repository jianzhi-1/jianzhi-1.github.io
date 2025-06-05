import React from 'react';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import avatar from './static/avatar.png';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClassIcon from '@mui/icons-material/Class';
  
export default function SideMenu({setPage}) {

    const drawerWidth = 158;

    const IconList = [
        <HomeIcon/>,
        <PersonIcon/>,
        <SchoolIcon/>,
        <WorkIcon/>,
        <LightbulbIcon/>,
        <ClassIcon/>,
        <FitnessCenterIcon/>,
        <PaletteIcon/>
    ]
  
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
          <div style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:'15px',
            marginBottom:'15px'}}>
        <Avatar alt="Jianzhi Wang" src={avatar} sx={{ width: 96, height: 96 }}/>
        </div>
        <Divider />
        <List>
          {['Home', 'About', 'Coursework', 'Projects', 'Sketches'].map((text, index) => (
            <ListItem button key={text} onClick={() => {
                setPage(text.toLowerCase());}}>
              <ListItemIcon>
                {(index < IconList.length) ? IconList[index] : <QuestionMarkIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{marginLeft:"-20px", fontFamily:"sans-serif"}} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    );
}
