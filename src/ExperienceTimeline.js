import React from 'react';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

export default function ExperienceTimeline() {

    return (
        <Grid container spacing={0}>
            <Grid item xs={5}>
                <div style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',marginTop:"20px"}}>
                    <Timeline align="left">
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 10' }}
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">Future</Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                                <Typography>
                                May 2021
                                </Typography>
                                <Typography>
                                Nov 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">GIC Pte Ltd</Typography>
                                <Typography><i>Core Strategist</i></Typography>
                                <Typography>+ Built six financial analytics, portfolio construction and business dashboards in React and Django</Typography>
                                <Typography>+ Attended requirement gathering meetings to produce two prototype applications</Typography>
                                <Typography>+ Automated the data scrapping and ingestion of visualisation dashboards to database</Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 10' }}
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                                <Typography>Nov 2020</Typography>
                                <Typography>Jan 2019</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">Singapore Armed Forces</Typography>
                                <Typography><i>Lieutenant</i></Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 10' }}
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                                <Typography>Dec 2017</Typography>
                                <Typography>Nov 2017</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                A*STAR - Agency for Science, Technology and Research
                                </Typography>
                                <Typography><i>Student Researcher</i></Typography>
                                <Typography>+ Developed a Python Tkinter software (FacialDataCollector) that automated the segmentation of video clips with continuous facial features, so as to produce quality data for training emotion-recognition ML models</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </Grid>


            <Grid item xs={5}>
                <div style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                        
                    <Timeline align="left">
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                                <Typography>Aug 2021</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                University of California, Berkeley (United States)
                                </Typography>
                                <Typography>+ in progress</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            style={{flex:0.2}}
                            align="right"
                            variant="body2"
                            color="black"
                            >
                                <Typography>Dec 2018</Typography>
                                <Typography>Jan 2013</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                Raffles Institution (Singapore)
                                </Typography>
                                <Typography>+ Physics Olympiad Trainer (2020)</Typography>
                                <Typography>+ 9 Distinctions in 2018 GCE 'A' Levels</Typography>
                                <Typography>+ Academic Excellence Award (2017, 2018)</Typography>
                                <Typography>+ Raffles Academy (Mathematics, Physics)</Typography>
                                <Typography>+ International Mathematical Olympiad (Honorable Mention)</Typography>
                                <Typography>+ International Physics Olympiad (Gold)</Typography>
                                <Typography>+ National Olympiad in Informatics (Gold, 4th Individual)</Typography>
                            </TimelineContent>
                        </TimelineItem>


                    </Timeline>
                </div>
            </Grid>
        </Grid>
    );
}
