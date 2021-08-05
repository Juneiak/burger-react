import { apiUrl, checkResponse } from "./apiUtils.js";


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