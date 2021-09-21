import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";

const appReducer = combineReducers({
  loginReducer,
  sessionReducer,
});

export default appReducer;
