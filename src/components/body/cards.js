import React, {Component} from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {Card} from './card'

class Cards extends Component{    
    render(){
        const {loading, items } = this.props
        return(
          <Grid container spacing={3}>
                {loading === false ?
                  Object.keys(items).map((index)=>{ 
                    return <Card item={items[index]} key={index} />
                  })
                  : null}
            </Grid>
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