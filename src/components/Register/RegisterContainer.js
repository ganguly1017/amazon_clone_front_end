import React, { Component } from 'react'
import RegisterView from './RegisterView'
import { registerRequest } from './../../redux/actions/registerActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


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

    const user = {
      username: this.state.name,
      password: this.state.password1,
      email: this.state.email
    }
    
    this.props.registerRequest(user, this.props.history)

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

const mapStateToProps = (state) => ({
  register: state.register
})

const mapDispatchToProps = {
  registerRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer))
