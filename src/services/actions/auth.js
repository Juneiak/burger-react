import { apiAuthUrl, checkResponse} from "../../utils/apiUtils.js";
import {setCookie, getCookie, deleteCookie} from '../../utils/cookieUtils.js';
import { stripBearerToken } from "../../utils/utils.js";
import { fetchWithRefresh } from '../../utils/api.js';

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const register = (registerData) => {
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
        setCookie('Atoken', stripBearerToken(data.accessToken))
      })
      .catch(err => console.error(err))
  }
}

export const login = (loginData) => {
  return function (dispatch) {
    return fetch(`${apiAuthUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(checkResponse)
      .then(data => {
        dispatch({type: SET_USER, data: data.user})
        localStorage.setItem('Rtoken', data.refreshToken)
        setCookie('Atoken', stripBearerToken(data.accessToken))
        console.log('logged');
      })
  }
}

export const logout = () => {
  return function (dispatch) {
    const Rtoken = localStorage.getItem('Rtoken')
    if (Rtoken) {
      return fetch(`${apiAuthUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: Rtoken
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
    } else {
      console.error('you have already logut');
      return Promise.reject()
    } 
    
  }
}

export function getUser () {
  return function (dispatch) {
    return fetchWithRefresh(`${apiAuthUrl}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + getCookie('Atoken')
      }
    })
      .then(data => {
        dispatch({type: SET_USER, data: data.user})
        return (data)
      })
      .catch(err => console.error(err))
  }
}

export function changeProfileData (newProfileData) {
  return function (dispatch) {
    return fetchWithRefresh(`${apiAuthUrl}/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + getCookie('Atoken')
      },
      body: JSON.stringify(newProfileData)
    })
      .then(data => {
        dispatch({type: SET_USER, data: data.user})
      })
  }
}