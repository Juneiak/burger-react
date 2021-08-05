import { SET_USER, REMOVE_USER } from "../actions/auth.js";

const initialUserState = {
  user: {}
}

export const authReducer = (state=initialUserState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.data
      }
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: {}
      }
    }
    default:
      return state
  }
}