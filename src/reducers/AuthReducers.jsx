const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || {},
  result: localStorage.getItem("user") ? true : false,
  loading: false,
  error: ''
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
        error: '',
        userInfo: action.payload,
        result: true,
        loading: false,
      };

    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        error: '',
        result: false,
        loading: false,
      };

    case "LOGOUT_SUCCESS":
      return {
        error: '',
        userInfo: {},
        result: false,
        loading: false,
      };

    case "INVALID_TOKEN":
      localStorage.clear();
      return {
        error: "INVALID TOKEN! PLEASE LOG IN AGAIN!",
        userInfo: {},
        result: false,
        loading: false
      };

    default:
      return state;
  }
};

export default AuthReducer;
