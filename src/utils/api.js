import { apiUrl, checkResponse, checkServerResponse } from "./apiUtils.js";

export const register = (registerData) => {
  // console.log(registerData);
  return fetch(`${apiUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({registerData})
  })
    .then(checkResponse)
    .then(checkServerResponse)  
}

export const resetPassword = (resetData) => {
  return fetch(`${apiUrl}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resetData)
  })
    .then(checkResponse)
    .then(checkServerResponse)
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
    .then(checkServerResponse)
}