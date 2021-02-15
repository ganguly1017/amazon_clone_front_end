import React, { Component } from 'react'
import RegisterView from './RegisterView'

class RegisterContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      password1: '',
      password2: '',
      email: ''
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <RegisterView
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.props}
      />
    )
  }
}

export default RegisterContainer
