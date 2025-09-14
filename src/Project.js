import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
  
export default function Project({image, alt, title, description, github, devpost, report, demo, tryitout, poster}) {

    return (
        <Grid item xs={3}>
            <div style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={alt}
                        sx={{ width: '100%' }} // ensures image fills the Card width
                        />
                        <CardContent sx={{ width: '100%' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ px:2 }}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
                                {description}
                            </Typography>
                        </CardContent>
                        
                    </CardActionArea>
                    <CardActions>
                        {github?<Button size="small"><a href={github} target="_blank" class="button">github</a></Button>:null}
                        {devpost?<Button size="small"><a href={devpost} target="_blank" class="button">devpost</a></Button>:null}
                        {report?<Button size="small"><a href={report} target="_blank" class="button">report</a></Button>:null}
                        {poster?<Button size="small"><a href={poster} target="_blank" class="button">poster</a></Button>:null}
                        {demo?<Button size="small"><a href={demo} target="_blank" class="button">demo</a></Button>:null}
                        {tryitout?<Button size="small"><a href={tryitout} target="_blank" class="button">try it out!</a></Button>:null}
					</CardActions>
                </Card>
            </div>
	    </Grid>
    );
}
