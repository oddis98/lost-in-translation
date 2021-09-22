import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";
import { translateMiddleware } from "./translateMiddleware";

export default applyMiddleware(
  loginMiddleware,
  sessionMiddleware,
  translateMiddleware
);
