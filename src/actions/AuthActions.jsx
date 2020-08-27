export const LoginRequest = () => ({
  type: "LOGIN_REQUEST",
});

export const LoginSuccess = (userInfo) => ({
  type: 'LOGIN_SUCCESS',
  payload: userInfo
})

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE'
})

export const SignupRequest = () => ({
  type: "SIGNUP_REQUEST",
});

export const SignupSuccess = (userInfo) => ({
  type: 'SIGNUP_SUCCESS',
  payload: userInfo
})

export const SignupFailure = () => ({
  type: 'SIGNUP_FAILURE'
})

export const LogoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
})