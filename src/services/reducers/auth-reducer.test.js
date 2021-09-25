import { SET_USER, REMOVE_USER } from '../constants/index';
import authReducer from './auth-reducer';

const initialUserState = {
  user: {},
};

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialUserState);
  });

  it('should handle SET_USER', () => {
    expect(authReducer(initialUserState, {
      type: SET_USER,
      data: { data: 'testData' },
    })).toEqual({
      user: { data: 'testData' },
    });
  });

  it('should handle REMOVE_USER', () => {
    expect(authReducer({ user: { data: 'testData' } }, {
      type: REMOVE_USER,
    }))
      .toEqual({
        user: {},
      });
  });
});
