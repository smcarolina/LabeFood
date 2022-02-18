import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



export default function Card2({name, image, description, price}) {
    return (
        <Card sx={{ flexGrow: 2, maxWidth: 345}}>
            <CardActionArea sx={{maxWidth: 90}}>
                <CardMedia
                component="img"
                height="140"
                width="140"
                image={image}
                alt={description}
                />
            <CardContent >
            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <Typography gutterBottom variant="h5" component="div" color="primary">{name}</Typography>
                </Grid>
                <Grid item xs={2}  >
                  <Typography gutterBottom variant="h6" component="div">
                    R${price}
                  </Typography>
                  </Grid>
                <Grid item xs={8} >
                <Typography gutterBottom variant="h7" component="div">
                    {description}
                  </Typography>
                </Grid>
                
                  <Grid item xs={4}  >
                    <Button variant="outlined" color="primary" 
                        // onClick={()=>{onClick(prod)}}
                    >
                        Adicionar</Button>
                </Grid>
            </Grid>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}