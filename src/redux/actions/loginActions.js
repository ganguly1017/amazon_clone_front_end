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


