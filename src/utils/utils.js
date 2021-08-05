export const stripBearerToken = (token) => {
  return token.split('Bearer ')[1]
}