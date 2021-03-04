import React, { Component } from 'react'
import YourAccountView from './YourAccountView'

class YourAccountContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }


  render() {
    return (
     <YourAccountView 
      {...this.props}
     />
    )
  }
}

export default YourAccountContainer