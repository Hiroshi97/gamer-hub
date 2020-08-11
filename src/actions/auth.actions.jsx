export const LoginSuccessful = (userInfo) => ({
  type: 'LOGIN_SUCCESSFUL',
  payload: userInfo
})

export const LogoutSuccessful = () => ({
  type: 'LOGOUT_SUCCESSFUL',
})

export const LoggedIn = () => ({
  type: "LOGGED_IN",
});

export const LoggedOut = () => ({
  type: "LOGGED_OUT",
});
