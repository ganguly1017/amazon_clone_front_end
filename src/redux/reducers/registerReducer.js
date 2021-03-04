import {
  REGISTER_ERROR,
  REGISTER_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_ERROR_CLEAR
} from './../actions/types'

const initialState = {
  isLoading: false,
  errors: {

  }
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case REGISTER_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case REGISTER_ERROR:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      }
    case REGISTER_ERROR_CLEAR:
      return {
        ...state,
        errors: {},
        isLoading: false
      }
    default:
      return state
  }
}