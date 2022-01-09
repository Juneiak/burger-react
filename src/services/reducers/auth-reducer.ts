import { SET_USER, REMOVE_USER } from '../constants/index';
import { TAuthActions } from '../actions/auth.js';
import { TUser } from '../types/data/index';

type TInitialUserState = {
  user: TUser | {};
}

const initialUserState: TInitialUserState = {
  user: {},
};

const authReducer = (state = initialUserState, action: TAuthActions) => {
  switch (action.type) {
    case SET_USER: {
      const res = {
        ...state,
        user: action.data,
      };
      return res;
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
