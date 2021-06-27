import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
		width: '100%',
    },
    heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
    },
}));
  
export default function Ctf() {
    const classes = useStyles();
  
    return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Linux</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						SSH
						$ ssh -i crypto_bot.key bot1@100.0.0.0
						sudo -l
						cat
						./
						chmod 777 file.txt
						chown 
						vi
						nano
						| grep 
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Cryptography</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					base64: a string with a lot of = signs
					caesar cypher tool
					stegnography tool
					magic
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Network</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					nmap -sU -sS 100.0.0.0
					nmap --script=default 100.0.0.0
					common ports 
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Web</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					web scrapper
					directory traversal attack ../../
					common file names
					dirb
					css, javascript
					sql injection '1 OR 1=1'
					Network panel: cache, request and response headers, check accept what kind of files
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Windows</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					dmp file
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Reverse Engineering</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					Ghedira
					Cutter
					Macro in words
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>OSINT</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Pwn</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Forensics</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>


			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
            		<Typography className={classes.heading}>Misc</Typography>
          		</AccordionSummary>
				<AccordionDetails>
					<Typography>
					If there is an email, try emailing the email address: may auto-reply with the flag
					</Typography>
				</AccordionDetails>
			</Accordion>

      </div>
    );
}
