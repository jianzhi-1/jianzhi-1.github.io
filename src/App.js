import avatar from './static/avatar.jpeg';
import fun from './static/fun.jpeg';
import './App.css';
import React from 'react'
import Button from '@mui/material/Button';
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
import twoRoneBLLM from './static/twoRoneBLLM.png'
import spillyourtea from './static/spillyourtea.png'
import starwhale from './static/whale200.gif'
import darbouxparser from './static/darbouxparser.png'
import bony from './static/bony.png'
import bandung from './static/bandung.png'
import justice from './static/justice.png'
import switchingautoregressive from './static/switchingautoregressive.png'

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

import RunningTable from './RunningTable'
import SJPOTable from './SJPOTable'
import CS70Table from './CS70Table'

const allPages = ['About', 'Coursework', 'Projects', 'Sketches']

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
		const allPages = ["About", "Coursework", "Projects", "Sketches"];
		return (
			<div>
				<br></br>
				<br></br>
				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>
					<Avatar alt="Jianzhi Wang" src={avatar} sx={{ width: 384, height: 384 }}/>
				</div>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',}}>
					<h1 style={{fontSize:"300%", fontFamily:"Helvetica"}}>Jianzhi Wang</h1>
				</div>

				<div style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center', marginTop:"-70px"}}>
					<h6 style={{fontSize:"120%", fontFamily:"Helvetica"}}>Berkeley, CA</h6>
					<h6 style={{fontSize:"120%", fontFamily:"Helvetica"}}>&nbsp;·&nbsp;</h6>
					<h6 style={{fontSize:"120%", fontFamily:"Helvetica"}}>jianzhi@</h6>
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
								<p style={{fontSize:"120%"}}>I am Jianzhi, currently a senior at University of California, Berkeley.</p>
								<p style={{fontSize:"120%"}}>I love discussing about Mathematics and Computer Science. Feel free to approach me about these two subjects anytime!</p>
								<p style={{fontSize:"120%"}}>Outside the realm of academics, I enjoy playing Ultimate Frisbee, hiking, and running.</p>
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
		];

		const spring22 = [
			["COMPSCI 170", "Efficient Algorithms and Intractable Problems"],
			["EECS 126", "Probability and Random Processes"],
			["EECS 127", "Optimization Models in Engineering"],
			["ENGLISH R1A", "Reading and Composition"],
			["MATH 105", "Second Course in Analysis"],
			["MATH 185", "Introduction to Complex Analysis"]
		];

		const fall22 = [
			["COMPSCI 61C", "Great Ideas of Computer Architecture (Machine Structures)"],
			["COMPSCI 182", "Designing, Visualizing and Understanding Deep Neural Networks"],
			["COMPSCI 189", "Introduction to Machine Learning"],
			["MATH 113", "Introduction to Abstract Algebra"],
			["STAT 150", "Stochastic Processes"],
			["STAT 153", "Introduction to Time Series"]
		];

		const spring23 = [
			["COMPSCI 162", "Operating Systems and System Programming"],
			["EECS 151", "Introduction to Digital Design and Integrated Circuits"],
			["EECS 151LB", "Field-Programmable Gate Array Laboratory"],
			["ENGLISH R1B", "Reading and Composition"],
			["MATH 114", "Second Course in Abstract Algebra"],
			["MATH 126", "Introduction to Partial Differential Equations"]
		];

		const fall23 = [
			["MATH 128A", "Numerical Analysis"],
			["MATH 202A", "Introduction to Topology and Analysis"],
			["MATH C218A / STAT C205A", "Probability Theory"],
			["MATH 222A", "Partial Differential Equations"],
			["PSYCH C120", "Basic Issues in Cognition"],
			["STAT 210A", "Theoretical Statistics"]
		];

		const spring24 = [
			["COGSCI C127", "Cognitive Neuroscience"],
			["COMLIT 60AC", "Topics in the Literature of American Cultures (New York City and Los Angeles)"],
			["COMPSCI 186", "Introduction to Database Systems"],
			["ENGIN 183B", "Berkeley Method of Entrepreneurship Bootcamp"],
			["HISTORY 7B", "Introduction to the History of the United States: The United States from Civil War to Present"],
			["STAT 210B", "Theoretical Statistics"],
			["STAT 215B", "Statistical Models: Theory and Application"],
			["STAT 230A", "Linear Models"]
		];

		const fall24 = [];
		const spring25 = [];

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
						<br></br>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Spring 2022 🍃</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{spring22.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]}
								</Typography>))}
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Fall 2022 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{fall22.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]}
								</Typography>))}
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Spring 2023 🍃</Typography>
							</AccordionSummary>
							<AccordionDetails>
							{spring23.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]}
								</Typography>))}
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Fall 2023 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
							{fall23.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]}
								</Typography>))}
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Spring 2024 🍃</Typography>
							</AccordionSummary>
							<AccordionDetails>
							{spring24.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]}
								</Typography>))}
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Fall 2024 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
							<Typography>
								Coming soon!
							</Typography>
							</AccordionDetails>
						</Accordion>
						<br></br>
						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							>
							<Typography>Spring 2025 🍃</Typography>
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

							<Project image={switchingautoregressive} alt="switching autoregressive" title="Forecasting U.S.'s Unemployment Rate"
							description="Using linear, autoregressive and switching AR models to predict U.S.'s unemployment rate; implying out the regime shifts in the economy - STAT 230A final project" 
							github="https://github.com/jianzhi-1/US-Unemployment-Switching-Model"
							report="https://github.com/jianzhi-1/US-Unemployment-Switching-Model/blob/main/230Areport.pdf"
							/>

							<Project image={twoRoneBLLM} alt="2R1BLLM" title="Two Rooms and a Boom (LLM Version)"
							description="A variant of the extremely fun board game 'Two Rooms and a Boom', where your opponents are LLMs designed to lie - submitted to HackMIT 2023 🎈" 
							github="https://github.com/shinfxh/1-epsilon"
							devpost="https://devpost.com/software/1-epsilon"
							/>

							<Project image={spillyourtea} alt="spill your tea" title="Spill Your Tea"
							description="A simple BNF parser to test the complexity between two matching algorithms - Submitted to Hack&amp;Roll 2023" 
							github="https://github.com/jianzhi-1/spill-your-tea"
							devpost="https://devpost.com/software/patronus-g70sv9"
							/>
		
							<Project image={darbouxparser} alt="darboux parser" title="Darboux Parser"
							description="A simple BNF parser to test the complexity between two matching algorithms - Created for CS61A A+ Project" 
							github="https://github.com/jianzhi-1/darboux-parser"
							/>

							<Project image={starwhale} alt="starwhale" title="Star Whales"
							description="A gesture-tracking game (powered by planck.js and handtrack.js) - Made for CalHacks 8.0 2021 🧸" 
							github="https://github.com/jianzhi-1/Star-Whales"
							devpost="https://devpost.com/software/star-whales"
							demo="https://www.youtube.com/watch?v=FPRGmSGK9Fk"
							tryitout="https://zenanana.github.io/Star-Whales/"
							/>

							<Project image={justice} alt="justice" title="Justice"
							description="A React-frontend, Django-backend web application for empowering conversations about social issues - Submitted to HackHarvard 2021" 
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
					<p style={{fontSize:"120%"}}>Below is a collection of a selected few of my sketches.</p>


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

						<Accordion defaultExpanded>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{
								backgroundColor: "#DED7F5"
							}}
							>
								<Typography>CS 70</Typography>
							</AccordionSummary>
							<AccordionDetails>
							<Typography>
								<b>Fall 2022 🍂</b>
								<CS70Table/>
							</Typography>
							</AccordionDetails>
						</Accordion>
						<br></br>

						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							sx={{
								backgroundColor: "#CBC3E3"
							}}
							>
							<Typography>Singapore Junior Physics Olympiad</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<SJPOTable/>
							</AccordionDetails>
						</Accordion>
					</div>
				</Box>
			</Box>
		);
	}

}

export default App;
