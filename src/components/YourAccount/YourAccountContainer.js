import React, { Component } from 'react'
import YourAccountView from './YourAccountView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class YourAccountContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    // if not authenticated user send to login page
    if (!this.props.login.isAuthenticated){
      this.props.history.push("/login")
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

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(YourAccountContainer))