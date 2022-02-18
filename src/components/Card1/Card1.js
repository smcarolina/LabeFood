import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { CardContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { goToRestaurantPage} from '../../routes/Coordinator'


const Card1 = (props) => {

    const history = useHistory()

    return (
        <CardContainer>

            <Card sx={{ flexGrow: 1, maxWidth: 300}}>
                <CardActionArea sx={{maxWidth: 90}} onClick={()=>goToRestaurantPage(history, props.id)}>
                    <CardMedia
                    component='img'
                    height="140"
                    image={props.image}
                    alt={props.name}
                    />
                <CardContent>
                <Typography gutterBottom variant="h7" component="div" color="primary">
                    {props.name}
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={8} >
                        
                        <Typography variant="h7" color="secondary">{props.deliveryTime}-{props.deliveryTime + 10} min</Typography>
                    </Grid>
                    <Grid item xs={4}  >
                        <Typography variant="h7" color="secondary">Frete R${props.shipping},00</Typography>
                    </Grid>
                </Grid>
                </CardContent>
            </CardActionArea>
            </Card>
        </CardContainer>
    );
}

export default Card1