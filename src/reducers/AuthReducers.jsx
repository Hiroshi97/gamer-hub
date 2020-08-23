const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || {},
  result: localStorage.getItem("user") ? true : false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        result: true,
      };

    case "LOGIN_SUCCESS":
      return {
        userInfo: action.payload,
        result: true,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        result: false,
      };

    case "LOGOUT_SUCCESS":
      return {
        userInfo: {},
        result: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
