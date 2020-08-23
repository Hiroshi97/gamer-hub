export const LoginSuccess = (userInfo) => ({
  type: 'LOGIN_SUCCESS',
  payload: userInfo
})

export const LogoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
})

export const LoginRequest = () => ({
  type: "LOGIN_REQUEST",
});
