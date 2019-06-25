import React from 'react'
import Grid from '@material-ui/core/Grid';
import MUICard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export function Card({item} ){
    return  <Grid item xs>
            <MUICard className={item.card}>
                {console.log(item)}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src={"http://thumbs3.ebaystatic.com/d/l1600/pict/"+item.itemId+".jpg"}
                        title={item.title}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                    </Typography>
                    <Typography 
                        component="p"
                        fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }
                        }>
                        {item.price}{item.currency}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </MUICard>
        </Grid>
}



/*
  itemId(pin):"123480884597"
  title(pin):"Samsonite Tenacity 3 Piece Luggage Set - Black, Blue, 25", 21", Backpack"
  url(pin):"https://www.ebay.com/itm/Samsonite-Tenacity-3-Piece-Luggage-Set-Black-Blue-25-21-Backpack/123480884597"
  endsAt(pin):"2019-04-30T14:59:59Z"
  image225(pin):"https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/EXwAAOSwtxlb5l9x/$_62.JPG?set_id=880000500F"
  currency(pin):"USD"
  price(pin):"99.99"
  originalPrice(pin):"270.00"
  discountPercentage(pin):"62"
  quantity(pin):"2509"
  shippingCost(pin):"0.00"
  dealUrl(pin):"https://www.ebay.com/deals/6036208965"

http://thumbs3.ebaystatic.com/d/l1600/pict/
*/