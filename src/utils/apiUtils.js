export const apiUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(response) {
  // console.log(response);
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`error: ${response.status}`)
}

export function checkServerResponse(response) {
  // console.log(response);
  if (response.success) {
    
    return response
  }
  return Promise.reject('server error')
}