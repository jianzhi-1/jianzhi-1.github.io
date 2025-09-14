import React from 'react';
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import avatar from './static/avatar.jpeg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClassIcon from '@mui/icons-material/Class';
  
export default function SideMenu() {

    const drawerWidth = 158;
    const navigate = useNavigate();

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

    const pages = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Coursework', path: '/coursework' },
      { name: 'Projects', path: '/projects' },
      { name: 'Sketches', path: '/sketches' }
    ];

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
          {pages.map((page, index) => (
            <ListItem button key={page.name} onClick={() => navigate(page.path)}>
              <ListItemIcon>
                {(index < IconList.length) ? IconList[index] : <QuestionMarkIcon />}
              </ListItemIcon>
              <ListItemText primary={page.name} style={{marginLeft:"-20px", fontFamily:"sans-serif"}} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    );
}
