import { apiAuthUrl, apiUrl, checkResponse } from "./apiUtils.js";
import {setCookie, getCookie} from './cookieUtils.js';
import { stripBearerToken } from "./utils.js";

export const resetPassword = (resetData) => {
  return fetch(`${apiUrl}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resetData)
  })
    .then(checkResponse)
}

export const sendCode = (restoreData) => {
  return fetch(`${apiUrl}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(restoreData)
  })
    .then(checkResponse)
}

export const refreshToken = () => {
  const Rtoken = localStorage.getItem('Rtoken')
  console.log('try refresh', Rtoken);// <--------------------------------------

  if (Rtoken) {
    return fetch(`${apiAuthUrl}/token`, {
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
        console.log('refreshed!!', data);  // <--------------------------------------
        setCookie('Atoken', stripBearerToken(data.accessToken))
        localStorage.setItem('Rtoken', data.refreshToken)
        return data
      })
      .catch(err => Promise.reject('refresh error'))
  } else return Promise.reject('Rtoken issue')
}

export const fetchWithRefresh = (url, options) => {
  return fetch(url, options)  
    .then(checkResponse)
    .catch(err => {
      if (err.message === 'jwt expired' || err.status === 403) {
        console.log(`try to refresh`);// <--------------------------------------
        return refreshToken()
          .then(data => {
            options.headers.Authorization = "Bearer " + getCookie('Atoken')
             return fetch(url, options)
          })
          .then(checkResponse)
      } return Promise.reject(err)
    })
}

