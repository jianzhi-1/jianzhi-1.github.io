import avatar from './static/avatar.jpeg';
import fun from './static/fun.jpeg';
import './App.css';
import React from 'react'
import Button from '@mui/material/Button';
import RunningTable from './RunningTable'
import SideMenu from './SideMenu'
import Project from './Project'
import Sketch from './Sketch'
import ExperienceTimeline from './ExperienceTimeline'
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import pxl from './static/pixelisk.png';
import starwhale from './static/whale200.gif'
import darbouxparser from './static/darbouxparser.png'
import bony from './static/bony.png'
import bandung from './static/bandung.png'
import justice from './static/justice.png'

import as from './static/a.jpeg'
import bs from './static/b.jpg'
import cs from './static/c.jpg'
import ds from './static/d.jpg'
import es from './static/e.jpg'
import fs from './static/f.jpg'
import gs from './static/g.jpg'
import hs from './static/h.jpg'
import is from './static/i.jpg'
import js from './static/j.jpg'

const allPages = ['About', 'Coursework', 'Experience', 'Projects', 'Teaching', 'Running', 'Sketches']

const useStyles = makeStyles({
	list: {
	  width: 250,
	},
	fullList: {
	  width: 'auto',
	},
});

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const App = () => {

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
		page: "home"
	});

	const setPage = (text) => {
		setState({...state, page: text});
	}

	if (state.page == "home"){
		const allPages = ["About", "Coursework", "Experience", "Projects", "Teaching", "Running", "Sketches"];
		return (
			<div>
				<br></br>
				<br></br>
				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>
					<Avatar alt="Wang Jianzhi" src={avatar} sx={{ width: 512, height: 512 }}/>
				</div>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>
					<h1 style={{fontSize:"300%"}}>Wang Jianzhi</h1>
				</div>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center', marginTop:"-70px"}}>
					<h6 style={{fontSize:"120%"}}>Berkeley, CA</h6>
					<h6 style={{fontSize:"120%"}}>&nbsp;·&nbsp;</h6>
					<h6 style={{fontSize:"120%"}}>jianzhi@berkeley.edu</h6>
				</div>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>
					<Stack spacing={2} direction="row">
						{allPages.map((item) => (<Button variant="text" onClick={() => {
							setState({...state, page: item.toLowerCase() });
						}}>{item}</Button>))}
					</Stack>
				</div>

				<br></br>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>

					<Stack spacing={2} direction="row">
						<a href="https://www.linkedin.com/in/jianzhi-wang/"><LinkedInIcon/></a>
						<a href="https://github.com/jianzhi-1"><GitHubIcon/></a>
						<a href="https://devpost.com/jianzhi-1"><LogoDevIcon/></a>
					</Stack>
				</div>

			</div>
	  	);
	} else if (state.page == "about"){
		return (

			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
		  
		  		<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
		  			<p style={{fontSize:"300%"}}>Hi there! 👋</p>
		  			<Grid container spacing={2}>
		  				<Grid item xs={6}>
							<div>
								<p style={{fontSize:"120%"}}>I am Jianzhi, currently a freshman at University of California, Berkeley.</p>
								<p style={{fontSize:"120%"}}>I love discussing about Mathematics and Computer Science (occasionally Physics as well). Feel free to approach me about these two subjects anytime!</p>
								<p style={{fontSize:"120%"}}>Outside the realm of academics, I enjoy playing Ultimate Frisbee, hiking, running, watching Ace Attorney gameplays and challenging people in chess.</p>
							</div>
			  			</Grid>
			  			<Grid item xs={6}>
							<Card>
								<CardMedia
								component="img"
								height="800"
								image={fun}
								alt="logo"
								/>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Box>
		)

	} else if (state.page == "coursework"){

		const fall21 = [
			["COMPSCI 61A", "The Structure and Interpretation of Computer Programs"],
			["COMPSCI 61B", "Data Structures"],
			["COMPSCI 70", "Discrete Mathematics and Probability Theory"],
			["MATH 104", "Introduction to Analysis"],
			["MATH H110", "Honors Linear Algebra"],
			["MATH 191", "Experimental Courses in Mathematics (Putnam Seminar)"]
		]

		return (
			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
		  
		  		<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
					<div>
						<p style={{fontSize:"300%"}}>Coursework</p>
						<p>@ University of California, Berkeley</p>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							>
							<Typography>Fall 2021 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{fall21.map((item) => (<Typography>
								<b>{item[0]}</b>: {item[1]}
							</Typography>))}
							
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Spring 2022 🍃</Typography>
							</AccordionSummary>
							<AccordionDetails>
							<Typography>
								Coming soon!
							</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Fall 2022 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
							<Typography>
								Coming soon!
							</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</Box>
		  	</Box>
		);
	} else if (state.page == "projects"){
		return (
			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
		  
		  		<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
					<div>
						<p style={{fontSize:"300%"}}>Project Gallery</p>
						<br></br>

						<Grid container spacing={2}>
		
							<Project image={darbouxparser} alt="darboux parser" title="Darboux Parser"
							description="A simple BNF parser to test the complexity between two matching algorithms - created for CS61A A+ Project." 
							github="https://github.com/jianzhi-1/darboux-parser"
							/>

							<Project image={starwhale} alt="starwhale" title="Star Whales"
							description="A gesture-tracking game (powered by planck.js and handtrack.js) made for CalHacks 8.0 2021" 
							github="https://github.com/jianzhi-1/Star-Whales"
							devpost="https://devpost.com/software/star-whales"
							demo="https://www.youtube.com/watch?v=FPRGmSGK9Fk"
							tryitout="https://zenanana.github.io/Star-Whales/"
							/>

							<Project image={justice} alt="justice" title="Justice"
							description="A React-frontend, Django-backend web application for empowering conversations about social issues. Submitted to HackHarvard 2021" 
							devpost="https://devpost.com/software/justice-j19kgw"/>

							<Project image={bandung} alt="bandung" title="Bandung"
							description="An AI-enhanced Whatsapp contact list condenser, built with Twilio API and Wit.AI 🏅 Won 'Most Creative Use of Twilio' award at MLH Robohacks 2021" 
							github="https://github.com/jianzhi-1/bandung"
							devpost="https://devpost.com/software/bandung"
							demo={"https://www.youtube.com/watch?v=MAqnXtNtNt8"}/>

							<Project image={pxl} alt="pixelisk" title="PixeLisk"
							description="A blockchain web application for designing and trading pixel art NFTs, built using Lisk.js 🏅 Won Lisk Community Choice Award at HackOnLisk 2021" 
							github="https://github.com/jianzhi-1/pixelisk"
							devpost="https://devpost.com/software/pixelisk"
							demo={"https://www.youtube.com/watch?v=rodgqOm8SXI"}/>

							<Project image={bony} alt="battle of new york" title="Battle of New York"
							description="An AI-powered virtual-reality simulation of superheroes in action 🥉 Third place at Facebook F8 Refresh Hackathon 2021" 
							github="https://github.com/jianzhi-1/battle-of-new-york"
							tryitout={"https://winter-fire-muskmelon.glitch.me/"}
							demo={"https://www.youtube.com/watch?v=z9MDNAkNInU"}/>
						</Grid>
					
					</div>
				</Box>
		  	</Box>
		);
	} else if (state.page == "experience"){
		return (
			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
	  
				<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
					<div>
						<p style={{fontSize:"300%"}}>Experience</p>
						<br></br>
						<ExperienceTimeline/>
					</div>
				</Box>
			</Box>
		);
	} else if (state.page == "running"){
		return (
			<Box sx={{ display: 'flex' }}>

			<SideMenu setPage={setPage}/>
		  
		  <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
			<div>
				<p style={{fontSize:"300%"}}>Running</p>
				<RunningTable/>
			</div>
			</Box>
		  </Box>


		);
	} else if (state.page == "sketches"){

		return (
			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
			
				<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
				<div>
					<p style={{fontSize:"300%"}}>Sketches</p>
					<p style={{fontSize:"120%"}}>Below is a collection of a selected few of my own sketches.</p>


					<Grid container spacing={2}>
						<Sketch image={as} alt="Sketch A"/>
						<Sketch image={bs} alt="Sketch B"/>
						<Sketch image={cs} alt="Sketch C"/>
						<Sketch image={ds} alt="Sketch D"/>
						<Sketch image={es} alt="Sketch E"/>
						<Sketch image={fs} alt="Sketch F"/>
						<Sketch image={gs} alt="Sketch G"/>
						<Sketch image={hs} alt="Sketch H"/>
						<Sketch image={is} alt="Sketch I"/>
						<Sketch image={js} alt="Sketch J"/>
					</Grid>
				</div>
				</Box>
			</Box>
		);
	} else if (state.page == "teaching"){
		return (
			<Box sx={{ display: 'flex' }}>

				<SideMenu setPage={setPage}/>
		  
				<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
					<div>
						<p style={{fontSize:"300%"}}>Teaching</p>
						<p style={{fontSize:"120%"}}> 🛠️ under construction 🛠️ </p>
					</div>
				</Box>
			</Box>
		);
	}

}

export default App;
