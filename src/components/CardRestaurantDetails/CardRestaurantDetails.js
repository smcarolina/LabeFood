//card de infos do restaurante, na pagina de detalhes do restaurante


import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    elevation: 0,
    color: theme.palette.text.secondary,
}));

export default function Card4({name, image, category, address, deliveryTime, shipping}) {
    return (
        <Card sx={{ flexGrow: 2, maxWidth: 345}}>
            <CardActionArea sx={{maxWidth: 90}}>
                <CardMedia
                component="img"
                height="120"
                width="328"
                radius="8"
                image={image}
                alt="green iguana"
                />
            <CardContent>
            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <Typography gutterBottom variant="h7" component="div" color="primary">{name}</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Item elevation={0}>{category}</Item>
                </Grid>
                <Grid item xs={8} >
                    <Item elevation={0}>{deliveryTime}-{deliveryTime + 10} min</Item>
                </Grid>
                <Grid item xs={4}  >
                    <Item elevation={0}>Delivery: {shipping},00</Item>
                </Grid>
                <Grid item xs={8} >
                    <Item elevation={0}>{address}</Item>
                </Grid>
                
            </Grid>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}