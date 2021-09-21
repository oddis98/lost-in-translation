import { LoginAPI } from "../../api/LoginAPI";
import {
  ACTION_LOGIN_ATTEMPTING,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPTING) {
      LoginAPI.login({ username: action.payload })
        .then((profile) => {
          dispatch(loginSuccessAction(profile));
        })
        .catch((error) => {
          dispatch(loginErrorAction(error.message));
        });
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
    }
  };
