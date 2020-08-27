const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || {},
  result: localStorage.getItem("user") ? true : false,
  loading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "SIGNUP_REQUEST":
      return {
        ...state,
        result: false,
        loading: true,
      };

    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        userInfo: action.payload,
        result: true,
        loading: false,
      };

    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        ...state,
        result: false,
        loading: false,
      };

    case "LOGOUT_SUCCESS":
      return {
        userInfo: {},
        result: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
