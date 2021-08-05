import { apiAuthUrl, checkResponse} from "../../utils/apiUtils.js";
import {setCookie, getCookie, deleteCookie} from '../../utils/cookieUtils.js';
import { stripBearerToken } from "../../utils/utils.js";
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const register = (registerData) => {
  // console.log(registerData);
  return function (dispatch) {
    fetch(`${apiAuthUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    })
      .then(checkResponse)
      .then(data => {
        dispatch({type: SET_USER, data: data.user})
        localStorage.setItem('Rtoken', data.refreshToken)
        setCookie('Atoken', stripBearerToken(data.accessToken), {expires: 60*20})
      })
      .catch(err => console.error(err))
  }
}

export const login = (loginData) => {
  return function (dispatch) {
    fetch(`${apiAuthUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(checkResponse)
      .then(data => {
        console.log(data);
        dispatch({type: SET_USER, data: data.user})
        localStorage.setItem('Rtoken', data.refreshToken)
        setCookie('Atoken', stripBearerToken(data.accessToken), {expires: 60*20})
      })
      .catch(err => console.error(err))
  }
}

export const logout = () => {
  return function (dispatch) {
    const Rtoken = localStorage.getItem('Rtoken')
    if (Rtoken) {
      fetch(`${apiAuthUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: `{{${Rtoken}}}`
        })
      })
        .then(checkResponse)
        .then(data => {
          console.log(data.message)
          dispatch({type: REMOVE_USER})
          localStorage.removeItem('Rtoken')
          deleteCookie('Atoken')
        })
        .catch(err => console.error(err))
    }
    console.error('you have already logut');
  }
}

export const refreshToken = () => {
  const Rtoken = localStorage.getItem('Rtoke')
  if (!getCookie('Atoken') && Rtoken) {
    fetch(`${apiAuthUrl}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: `{{${Rtoken}}}`
      })
    })
      .then(checkResponse)
      .then(data => {
        setCookie('Atoken', stripBearerToken(data.accessToken), {expires: 60*20})
        return data
      })
      .catch(err => console.error(err))
  }
  console.error('tokens error')
}

export const fetchWithRefresh = (url, options) => {
  return fetch(url, options)
    .then(checkResponse)
    .catch(err => {
      if (err === 'jwt expired') {
        return refreshToken()
          .then(data => fetch(url, options))
          .then(checkResponse)
          .catch(err => Promise.reject('access error'))
      } else return Promise.reject(err)
    })
}
