import React, { Component } from 'react'
import PasswordChangeView from './PasswordChangeView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changePassword } from './../../redux/actions/loginActions'

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

    const user = {
      username: this.state.username,
      newPassword: this.state.newPassword,
      newPassword2: this.state.newPassword2,
      oldPassword: this.state.oldPassword
    }

    // send change password request
    this.props.changePassword(user, this.props.history, this.props.t)

    this.setState({ username: this.props.login.username })
    this.setState({ newPassword: '' })
    this.setState({ newPassword2: '' })
    this.setState({ oldPassword: '' })
    
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
 changePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasswordChangeContainer))
