import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Home from './Home'
import Ctf from './Ctf'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
	list: {
	  width: 250,
	},
	fullList: {
	  width: 'auto',
	},
});

const App = () => {

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
		page: "CTF"
	});
  
	const toggleDrawer = (anchor, open) => (event) => {
	  if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		return;
	  }
  
	  setState({ ...state, [anchor]: open });
	};
  
	const list = (anchor) => (
	  <div
		className={clsx(classes.list, {
		  [classes.fullList]: anchor === 'top' || anchor === 'bottom',
		})}
		role="presentation"
		onClick={toggleDrawer(anchor, false)}
		onKeyDown={toggleDrawer(anchor, false)}
	  >
		<List>
		  {['Home'].map((text, index) => (
			<ListItem button key={text}>
			  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
			  <ListItemText primary={text} />
			</ListItem>
		  ))}
		</List>
		<Divider />
		<List>
		  {['CP', 'Hackathon', 'CTF'].map((text, index) => (
			<ListItem button onClick={() => {setState({...state, page: text }); console.log(text);}} key={text}>
			  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
			  <ListItemText primary={text} />
			</ListItem>
		  ))}
		</List>
	  </div>
	);
  
	console.log("HERE")
	console.log(state.page)

	if (state.page == "home"){
		return (
		<div>
		  <React.Fragment key="right">
			  <Button onClick={toggleDrawer("right", true)}>right</Button>
			  <SwipeableDrawer
				  anchor="right"
				  open={state["right"]}
				  onClose={toggleDrawer("right", false)}
				  onOpen={toggleDrawer("right", true)}
			  >
				  {list("right")}
			  </SwipeableDrawer>
		  </React.Fragment>
		</div>
	  );
	} else if (state.page == "CTF") return Ctf();
	//if (this.state.display == "home") return <Home/>

}

export default App;
