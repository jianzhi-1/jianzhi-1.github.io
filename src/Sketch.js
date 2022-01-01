import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Sketch({image, alt}) {

    return (
        <Grid item xs={3}>
            <div style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="345"
                        image={image}
                        alt={alt}
                        />
                </Card>
            </div>
	    </Grid>
    );
}
