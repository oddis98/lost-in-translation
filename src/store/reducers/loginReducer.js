import {
  ACTION_LOGIN_ATTEMPTING,
  ACTION_LOGIN_DELETE,
  ACTION_LOGIN_ERROR,
  ACTION_LOGIN_SUCCESS,
} from "../actions/loginActions";

const initialState = {
  user: "",
  loginAttempting: false,
  loginError: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_ATTEMPTING:
      return {
        ...state,
        loginAttempting: true,
        loginError: "",
      };
    case ACTION_LOGIN_SUCCESS:
      return {
        ...state,
        loginAttempting: false,
        user: action.payload,
      };
    case ACTION_LOGIN_ERROR:
      return {
        ...state,
        loginAttempting: false,
        loginError: action.payload,
      };
    case ACTION_LOGIN_DELETE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
