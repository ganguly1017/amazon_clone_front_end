import React, { Component } from 'react'
import PasswordChangeView from './PasswordChangeView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class PasswordChangeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: this.props.login.user.username,
      oldPassword: '',
      newPassword: '',
      newPassword2: ''
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
      <PasswordChangeView
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasswordChangeContainer))
