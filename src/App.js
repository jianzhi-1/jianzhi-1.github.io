import avatar from './static/avatar.png';
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
import masqueimage from './static/masque.png'
import worthyimage from './static/worthy.png'
import branchpredictor from './static/branchpredictor.png'
import garch from './static/garch.png'
import transactionscheduling from './static/transaction-scheduling.png';
import llmaos from './static/llmaos.png';
import usb2 from './static/usb2.png';
import officeonfire from './static/corpse.gif';

import CS170MT1 from './static/170MT1.pdf';
import CS170MT2 from './static/170MT2.pdf';
import ECON171FINAL from './static/171Final.pdf';
import EECS126MT1 from './static/126EEMT1.pdf';
import EECS126FINAL from './static/126EEFinal.pdf';
import EECS127MT from './static/127MT.pdf';
import EECS127FINAL from './static/127Final.pdf';
import MATH105FINAL from './static/105Final.pdf';
import MATHH110FINAL from './static/110Final.pdf';
import MATH113FINAL from './static/113Final.pdf';
import MATH126MT1 from './static/126MT1.pdf';
import MATH126MT2 from './static/126MT2.pdf';
import MATH126FINAL from './static/126Final.pdf';
import MATH128AMT from './static/128AMT.pdf';
import MATH128AFINAL from './static/128AFinal.pdf';
import MATH218AFINAL from './static/218AFinal.pdf';
import MATH222AMT1 from './static/222AMT1.pdf';
import MATH222AMT2 from './static/222AMT2.pdf';
import MATH222AFINAL from './static/222AFinal.pdf';
import STAT150MT1 from './static/150MT1.pdf';
import STAT150MT2 from './static/150MT2.pdf';
import STAT150FINAL from './static/150Final.pdf';
import STAT153MT from './static/153MT.pdf';
import STAT153FINAL from './static/153Final.pdf';
import STAT210BFINAL from './static/210BFinal.pdf';
import STAT230AMT from './static/230AMT.pdf';
import STAT215BFINAL from './static/215BFinal.pdf';

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
								<p style={{fontSize:"120%"}}>I am Jianzhi, and I (most recently) graduated from the University of California, Berkeley.</p>
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
			["MATH H110", "Honors Linear Algebra 💎", MATHH110FINAL],
			["MATH 191", "Experimental Courses in Mathematics (Putnam Seminar)"]
		];

		const spring22 = [
			["COMPSCI 170", "Efficient Algorithms and Intractable Problems", CS170MT1, CS170MT2],
			["EECS 126", "Probability and Random Processes", EECS126MT1, EECS126FINAL],
			["EECS 127", "Optimization Models in Engineering 💎", EECS127MT, EECS127FINAL],
			["ENGLISH R1A", "Reading and Composition"],
			["MATH 105", "Second Course in Analysis 💎", MATH105FINAL],
			["MATH 185", "Introduction to Complex Analysis"]
		];

		const fall22 = [
			["COMPSCI 61C", "Great Ideas of Computer Architecture (Machine Structures)"],
			["COMPSCI 182", "Designing, Visualizing and Understanding Deep Neural Networks"],
			["COMPSCI 189", "Introduction to Machine Learning"],
			["MATH 113", "Introduction to Abstract Algebra", MATH113FINAL],
			["STAT 150", "Stochastic Processes", STAT150MT1, STAT150MT2, STAT150FINAL],
			["STAT 153", "Introduction to Time Series", STAT153MT, STAT153FINAL]
		];

		const spring23 = [
			["COMPSCI 162", "Operating Systems and System Programming 💎"],
			["EECS 151", "Introduction to Digital Design and Integrated Circuits 💎"],
			["EECS 151LB", "Field-Programmable Gate Array Laboratory"],
			["ENGLISH R1B", "Reading and Composition"],
			["MATH 114", "Second Course in Abstract Algebra"],
			["MATH 126", "Introduction to Partial Differential Equations", MATH126MT1, MATH126MT2, MATH126FINAL]
		];

		const fall23 = [
			["MATH 128A", "Numerical Analysis", MATH128AMT, MATH128AFINAL],
			["MATH 202A", "Introduction to Topology and Analysis"],
			["MATH C218A / STAT C205A", "Probability Theory", MATH218AFINAL],
			["MATH 222A", "Partial Differential Equations", MATH222AMT1, MATH222AMT2, MATH222AFINAL],
			["PSYCH C120", "Basic Issues in Cognition"],
			["STAT 210A", "Theoretical Statistics 💎"]
		];

		const spring24 = [
			["COGSCI C127", "Cognitive Neuroscience"],
			["COMLIT 60AC", "Topics in the Literature of American Cultures (New York City and Los Angeles)"],
			["COMPSCI 186", "Introduction to Database Systems"],
			["ENGIN 183B", "Berkeley Method of Entrepreneurship Bootcamp"],
			["HISTORY 7B", "Introduction to the History of the United States: The United States from Civil War to Present"],
			["STAT 210B", "Theoretical Statistics", STAT210BFINAL],
			["STAT 215B", "Statistical Models: Theory and Application 💎"],
			["STAT 230A", "Linear Models", STAT230AMT]
		];

		const fall24 = [
			["COMPSCI 164", "Programming Languages and Compilers 💎"],
			["COMPSCI 168", "Introduction to the Internet: Architecture and Protocols 💎"],
			["COMPSCI 198", "Linux System Administration Decal"],
			["COMPSCI 288", "Natural Language Processing"],
			["ECON C171", "Development Economics", ECON171FINAL],
			["ELENG 225D", "Audio Signal Processing in Humans and Machines"],
			["ENGLISH 177", "Literature and Philosophy 💎"],
			["INDENG 221", "Introduction to Financial Engineering"]
		];

		const spring25 = [
			["COMPSCI 152", "Computer Architecture and Engineering 💎"],
			["COMPSCI 161", "Computer Security"],
			["COMPSCI 262A", "Advanced Topics in Computer Systems"],
			["EECS 251B", "Advanced Digital Integrated Circuits and Systems"]
		];

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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
							<Typography>Fall 2024 🍂</Typography>
							</AccordionSummary>
							<AccordionDetails>
							{fall24.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
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
							<Typography>Spring 2025 🍃</Typography>
							</AccordionSummary>
							<AccordionDetails>
							{spring25.map((item) => (<Typography>
									<b>{item[0]}</b>: {item[1]} {item.length > 2 ? (
									<span>
										[
										{Array.from({ length: item.length - 2 }).map((_, index) => (
										<span key={index}>
											<a href={item[index + 2]} target="_blank">
											notes
											</a>
											{index !== item.length - 3 ? ", " : ""}
										</span>
										))}
										]
									</span>
									) : ""}
								</Typography>))}
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

							<Project image={officeonfire} alt="office-on-fire-image" title="Office On Fire"
							description="A strategy/escape-room game, playable solo or in multiplayer, where you survive a burning office tower with the help of clever items. 🔥🏢🧯 - Submitted to Tencent Cloud EdgeOne Hackathon" 
							github="https://github.com/Twisted-Balloon-Studios/office-on-fire"
							demo="https://www.youtube.com/watch?v=m6WKtPzR9sY"
							tryitout="https://office-on-fire.edgeone.app/"
							/>

							<Project image={usb2} alt="usb2-image" title="Integration and Verification of USB 2.0"
							description="We integrated the USB 2.0 with Hammer in the Chipyard environment up to the PnR step and verified the digital components (RX Logic → ULPI → TX Logic). We also attempted to fix the DRC and LVS errors. - EECS 251B Final Project" 
							report=""
							/>

							<Project image={transactionscheduling} alt="transaction-scheduling-image" title="Investigations in Optimal Transaction Scheduling"
							description="We attempted to solve the transaction scheduling problem by formulating it as a linear program and trying various approximations, focusing on &quot;kernel-based scheduling&quot;. This did not beat the current state of the art (Shortest Makespan First) however. - CS 262A Project" 
							github="https://github.com/jianzhi-1/db-workload-sim"
							report="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-131.pdf"
							poster="https://drive.google.com/file/d/1gcDrQcNIExNEASNylh405Kmo4edSBSeB/"
							/>

							<Project image={llmaos} alt="llamos-image" title="LLMaOS"
							description="LLMaOS is a voice-controlled system that is designed to help users navigate a screened device without touch. It mimics the traditional computer architecture stack, with layers enhanced by LLM and VLM capabilities. - Submitted at TreeHacks 2025 🌲" 
							github="https://github.com/jianzhi-1/LLMaOS"
							devpost="https://devpost.com/software/llmaos"
							demo="https://www.youtube.com/watch?v=ECTOJ7sqNEE"
							report=""
							/>

							<Project image={masqueimage} alt="masque-image" title="Monotonous-to-Expressive Audio Converter"
							description="Masque is a transformer encoder model that uses auditory features as intermediaries to convert monotonous audio into expressive ones (from the set of 'happy', 'sad', 'confused', 'laughing') - ELENG 225D Final Project" 
							github="https://github.com/jianzhi-1/masque-prod"
							report="https://github.com/jianzhi-1/masque/blob/main/report.pdf"
							demo="https://github.com/jianzhi-1/masque/blob/main/presentation.pdf"
							/>

							<Project image={worthyimage} alt="worthy-image" title="Worthy"
							description="A chatbot that showcases an incredibly smooth multiplexing of realtime conversational abilities, emotion display and graphic rendering - Made at Pear VC Hackathon (Fall) 2024 🍐" 
							github="https://github.com/jianzhi-1/worthy"
							demo="https://www.youtube.com/watch?v=XSTgHln8Upg"
							/>

							<Project image={switchingautoregressive} alt="switching autoregressive" title="Forecasting U.S.'s Unemployment Rate"
							description="Using linear, autoregressive and switching AR models to predict U.S.'s unemployment rate; implying out the regime shifts in the economy - STAT 230A Final Project" 
							github="https://github.com/jianzhi-1/US-Unemployment-Switching-Model"
							report="https://github.com/jianzhi-1/US-Unemployment-Switching-Model/blob/main/230Areport.pdf"
							/>

							<Project image={garch} alt="garch" title="Applications of Bootstrap and Shrinkage in the GARCH Model"
							description="A creative demonstration of GARCH model's volatility prediction intervals by bootstrapping the innovation terms and applying shrinkage - STAT 215B Final Project" 
							github="https://github.com/jianzhi-1/GARCH-Prediction"
							report={STAT215BFINAL}
							/>

							<Project image={twoRoneBLLM} alt="2R1BLLM" title="Two Rooms and a Boom (LLM Version)"
							description="A variant of the extremely fun board game 'Two Rooms and a Boom', where your opponents are LLMs designed to lie - Submitted to HackMIT 2023 🎈" 
							github="https://github.com/shinfxh/1-epsilon"
							devpost="https://devpost.com/software/1-epsilon"
							/>

							<Project image={branchpredictor} alt="RISC-V Processor" title="RISC-V 5-Stage Pipeline Processor"
							description="A 5-stage RISC-V processor that aims to maximise a predetermined metric - Implemented and tested during Spring 2023's EECS 151" 
							report="https://github.com/jianzhi-1/eecs251b/blob/main/151/sp23_151_report.pdf"
							/>

							<Project image={spillyourtea} alt="spill your tea" title="Spill Your Tea"
							description="A virtual avatar for every person which is conditioned on their text messages, so that you can chat with another person's patronus when they are away (or not responding to you) - Submitted to Hack&amp;Roll 2023" 
							github="https://github.com/jianzhi-1/spill-your-tea"
							devpost="https://devpost.com/software/patronus-g70sv9"
							/>
		
							<Project image={darbouxparser} alt="darboux parser" title="Darboux Parser"
							description="A simple BNF parser to test the complexity between two matching algorithms - Created for CS 61A A+ Project" 
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
