import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
  
export default function Project({image, alt, title, description, github, devpost, demo, tryitout}) {

    return (
        <Grid item xs={3}>
            <div style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        
                    </CardActionArea>
                    <CardActions>
                        {github?<Button size="small"><a href={github} target="_blank" class="button">github</a></Button>:null}
                        {devpost?<Button size="small"><a href={devpost} target="_blank" class="button">devpost</a></Button>:null}
                        {report?<Button size="small"><a href={report} target="_blank" class="button">report</a></Button>:null}
                        {demo?<Button size="small"><a href={demo} target="_blank" class="button">demo</a></Button>:null}
                        {tryitout?<Button size="small"><a href={tryitout} target="_blank" class="button">try it out!</a></Button>:null}
					</CardActions>
                </Card>
            </div>
	    </Grid>
    );
}
