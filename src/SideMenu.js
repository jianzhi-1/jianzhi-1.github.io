import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const drawerContent = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <Avatar alt="Jianzhi Wang" src={avatar} sx={{ width: 96, height: 96 }} />
      </Box>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem
            button
            key={page.name}
            onClick={() => {
              navigate(page.path);
              setMobileOpen(false); // close drawer on mobile after click
            }}
          >
            <ListItemIcon>
              {index < IconList.length ? IconList[index] : <QuestionMarkIcon />}
            </ListItemIcon>
            <ListItemText
              primary={page.name}
              sx={{ ml: -2, fontFamily: "sans-serif" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {/* Hamburger menu only on mobile */}
      <Box sx={{ display: { xs: "block", md: "none" }, p: 1 }}>
        <IconButton onClick={() => setMobileOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Permanent drawer for md+ */}
      <Drawer
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        {drawerContent}
      </Drawer>

      {/* Temporary drawer for mobile */}
      <Drawer
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // better performance on mobile
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
