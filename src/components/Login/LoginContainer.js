import React, { Component } from 'react'
import LoginView from './LoginView';

class LoginContainer extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state);
  }

  render() {
    return (
      <LoginView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.satte}
        {...this.props}
      />
    )
  }
}

export default LoginContainer
