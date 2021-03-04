import {
  REGISTER_ERROR,
  REGISTER_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_ERROR_CLEAR
} from './types'

export const registerRequest = (userData, history) => (dispatch) => {
  
}

// Action creator for register errors
export const registerError = (payload) => {
  return {
    type: REGISTER_ERROR,
    payload: payload
  }
}

// Action creator for register process loading
export const registerResponse = () => {
  return {
    type: REGISTER_RESPONSE
  }
}

// Action creator for register errors clear
export const registerErrorClear = () => {
  return {
    type: REGISTER_ERROR_CLEAR
  }
}


