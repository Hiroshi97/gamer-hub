const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || {},
  result: localStorage.getItem("user") ? true : false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        result: true,
      };

    case "LOGGED_OUT":
      return {
        ...state,
        result: false,
      };
      
    case "LOGIN_SUCCESSFUL":
      return {
        userInfo: action.payload,
        result: true,
      };
    case "LOGOUT_SUCCESSFUL":
      return {
        userInfo: {},
        result: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
