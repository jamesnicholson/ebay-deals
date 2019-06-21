import React, {Component} from 'react'
import Container from '@material-ui/core/Container';
import Cards from './cards'

class Body extends Component{

    render(){
        return(
            <Container display="flex">
                <Cards />
            </Container>
        )
    }
}
export default Body