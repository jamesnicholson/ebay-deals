import React, { Component } from 'react';
import { connect } from 'react-redux'
import {initHandler} from  './actions'
import LoadingBar from 'react-redux-loading-bar'
import Header from './components/header'
import Body from './components/body'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(initHandler())
  }
  render() {
    return (
      <div className="App">
        <LoadingBar />
        <Header/>
        <Body />
      </div>
    );
  }
}

function mapStateToProps (items, summary) {

  return {
    loading: items === null,
    summary,
    items

  }
}
export default connect(mapStateToProps)(App)
