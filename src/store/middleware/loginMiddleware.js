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
  async (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPTING) {
      try {
        const user = await LoginAPI.login({ username: action.payload });
        if (user.length === 0) {
          await LoginAPI.register({ username: action.payload });
          const newUser = await LoginAPI.login({ username: action.payload });
          return dispatch(loginSuccessAction(newUser[0]));
        }
        return dispatch(loginSuccessAction(user[0]));
      } catch (e) {
        dispatch(loginErrorAction(e.message));
      }
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
      console.log(action.payload);
    }
  };
