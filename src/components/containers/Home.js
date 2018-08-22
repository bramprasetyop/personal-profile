import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Body from '../body/Body'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <React.Fragment>
      <Navbar />
      <Body />
    </React.Fragment>
    )

  }
}

export default Home
