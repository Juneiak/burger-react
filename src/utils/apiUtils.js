export const apiUrl = 'https://norma.nomoreparties.space/api';
export const apiAuthUrl = 'https://norma.nomoreparties.space/api/auth';

export function checkResponse(response) {
  if (response.ok) {
    return response.json().then(res => {
      if (res.success) return res
      return Promise.reject(res)
    })
  } else return Promise.reject(response)
}
