import {
  LOGIN_ERROR,
  LOGIN_RESPONSE,
  LOGIN_REQUEST,
  LOGIN_ERROR_CLEAR,
  SET_LOGIN_USER
} from './types'

import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'


export const loginRequest = (user, history) => (dispatch) => {
  // dispatch login request action
  dispatch({ type: LOGIN_REQUEST })

  // clear login errors
  dispatch(loginErrorClear())

  axios.post(
    `${apiBaseURL}/api/user/login`,
    user
  ).then((res) => {
    console.log(res.data)

    // set login user data to state
    dispatch(setLoginUser(res.data.user))

    // redirect to your account page / admin panel
    history.push("/your_account")

  }).catch((err) => {
    // set login errors
    dispatch(loginError(err.response.data.errors))

    console.log(err.response.data)
  })

  // set isLoading to false
  dispatch(loginResponse())

}

// Action creator for login errors
export const loginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload: payload
  }
}

// Action creator for login process loading
export const loginResponse = () => {
  return {
    type: LOGIN_RESPONSE
  }
}

// Action creator for login errors clear
export const loginErrorClear = () => {
  return {
    type: LOGIN_ERROR_CLEAR
  }
}

// Action creator for login errors clear
export const setLoginUser = (payload) => {
  return {
    type: SET_LOGIN_USER,
    payload: payload
  }
}


