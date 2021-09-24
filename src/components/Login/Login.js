import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAttemptAction,
  loginDeleteAction,
} from "../../store/actions/loginActions";
import { sessionSetAction } from "../../store/actions/sessionActions";
import Input from "../Input/Input";
import styles from "./login.module.css";

const Login = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { loginError, loginAttempting, user } = useSelector(
    (state) => state.loginReducer
  );

  const { username } = useSelector((state) => state.sessionReducer);

  const history = useHistory();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onButtonClick = () => {
    dispatch(loginAttemptAction(input));
  };

  useEffect(() => {
    if (username !== "") {
      history.push("/translations");
    }
    if (user !== "") {
      dispatch(sessionSetAction(user));
      dispatch(loginDeleteAction());
      history.push("/translations");
    }
  }, [username, user]);

  return (
    <>
      <Input
        onButtonClick={onButtonClick}
        onInputChange={onInputChange}
        placeholder="What's your name?"
      />
      {loginAttempting && <p className={styles.loading}>Loading...</p>}
      {loginError && <p>{loginError}</p>}
    </>
  );
};

export default Login;
