import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";
import { translateReducer } from "./translateReducer";

const appReducer = combineReducers({
  loginReducer,
  sessionReducer,
  translateReducer,
});

export default appReducer;
