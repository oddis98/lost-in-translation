import { LoginAPI } from "../../api/LoginAPI";
import {
  ACTION_LOGIN_ATTEMPTING,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    /**
     * If action.type is ACTION_LOGIN_ATTEMPTING
     * If the payload is empty, throw error.
     *
     * Try to login to the API (GET User). If there is no user found, register the user and then log the user in.
     * Returns dispatches loginSuccessAction on newUser[0] if newly registered or user[0] if already in database.
     * If this fails, dispatch loginErrorAction
     */
    if (action.type === ACTION_LOGIN_ATTEMPTING) {
      try {
        if (action.payload === "") {
          throw new Error("Can't be empty string");
        }
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
  };
