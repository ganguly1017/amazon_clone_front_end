import {
  LOGIN_ERROR,
  LOGIN_RESPONSE,
  LOGIN_REQUEST,
  LOGIN_ERROR_CLEAR,
  SET_LOGIN_USER
} from './../actions/types'

const initialState = {
  isLoading: false,
  errors: {

  },
  isAuthenticated: false,
  user: {

  }
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      }
    case LOGIN_ERROR_CLEAR:
      return {
        ...state,
        errors: {},
        isLoading: false
      }
    case SET_LOGIN_USER:
      return {
        ...state,
        errors: {},
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      }
    default:
      return state
  }
}