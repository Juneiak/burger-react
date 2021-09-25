import { apiAuthUrl, checkResponse } from '../../utils/api-utils';
import { setCookie, getCookie, deleteCookie } from '../../utils/cookie-utils';
import { stripBearerToken } from '../../utils/utils';
import { fetchWithRefresh } from '../../utils/api';
import { SET_USER, REMOVE_USER } from '../constants/index';
import { AppThunk, AppDispatch } from '../types/index';

export interface ISetUser {
  readonly type: typeof SET_USER;
  readonly data: any;
}

export interface IRemoveUser {
  readonly type: typeof REMOVE_USER;
}

export type TAuthActions =
| ISetUser
| IRemoveUser

export const setUser = (user: any): ISetUser => ({
  type: SET_USER,
  data: user,
});

export const removeUser = (): IRemoveUser => ({
  type: REMOVE_USER,
});

export const register: AppThunk = (registerData) => (
  function (dispatch: AppDispatch) {
    fetch(`${apiAuthUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(setUser(data.user));
        localStorage.setItem('Rtoken', data.refreshToken);
        setCookie('Atoken', stripBearerToken(data.accessToken));
      })
      .catch((err) => console.error(err));
  }
);

export const login: AppThunk = (loginData) => (
  function (dispatch: AppDispatch) {
    return fetch(`${apiAuthUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(setUser(data.user));
        localStorage.setItem('Rtoken', data.refreshToken);
        setCookie('Atoken', stripBearerToken(data.accessToken));
        console.log('logged');
      });
  }
);

export const logout: AppThunk = () => (
  function (dispatch: AppDispatch) {
    const Rtoken = localStorage.getItem('Rtoken');
    if (Rtoken) {
      return fetch(`${apiAuthUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: Rtoken,
        }),
      })
        .then(checkResponse)
        .then((data) => {
          console.log(data.message);
          dispatch(removeUser());
          localStorage.removeItem('Rtoken');
          deleteCookie('Atoken');
        })
        .catch((err) => console.error(err));
    }
    console.error('you have already logut');
    return Promise.reject();
  }
);

export const getUser: AppThunk = () => (
  function (dispatch: AppDispatch) {
    return fetchWithRefresh(`${apiAuthUrl}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('Atoken')}`,
      },
    })
      .then((data) => {
        dispatch(setUser(data.user));
        return (data);
      })
      .catch((err) => console.error(err));
  }
);

export const changeProfileData: AppThunk = (newProfileData) => (
  function (dispatch: AppDispatch) {
    return fetchWithRefresh(`${apiAuthUrl}/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('Atoken')}`,
      },
      body: JSON.stringify(newProfileData),
    })
      .then((data) => {
        dispatch(setUser(data.user));
      });
  }
);
