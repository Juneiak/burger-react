import { SET_USER, REMOVE_USER } from "../actions/auth.js";

const initialUserState = {
  user: {}
}

const authReducer = (state=initialUserState, action) => {
  switch (action.type) {
    case SET_USER: {
      const res = {
        ...state,
        user: action.data
      }
      return res
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

export default authReducer;