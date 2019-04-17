import React, {Component} from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const StyledCard = styled(Card)`
    max-width:345px;   
`
const StyledCardMedia = styled(CardMedia)`
    height:200px;   
`
class Cards extends Component{          
    cards(items){

        const classes = this.props
        return(
        items.map((item) => (
          <StyledCard key={item.itemId} className={classes.card}>
            <CardActionArea>
              <StyledCardMedia
                className={classes.media}
                image={item.image225}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography component="p">
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
          </StyledCard>
        )))
    }
    render(){
        console.log(this)
        const {loading, items } = this.props
        return(
            <div>
                {loading === false ? this.cards(items) : null}
            </div>
        )
    }
}
function mapStateToProps ({ebayfeed}) {
        return {
            loading: ebayfeed.items === undefined,
            summary: ebayfeed.summary,
            items:ebayfeed.items
        }
    }
export default connect(mapStateToProps)(Cards);

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


*/