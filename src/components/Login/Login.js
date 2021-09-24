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

/**
 * @returns a react fragment with an input component, and either a 'loading...' message or an error message.
 */
const Login = () => {
  // Local state for input change
  const [input, setInput] = useState("");

  // Implements useDispatch and useHistory hook, and imports some state values from redux store.
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginError, loginAttempting, user } = useSelector(
    (state) => state.loginReducer
  );
  const { username } = useSelector((state) => state.sessionReducer);

  // Changes local state on input change
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  // Dispatches loginAttemptAction with the iuput state as parameter on button click.
  const onButtonClick = () => {
    dispatch(loginAttemptAction(input));
  };

  /**
   * Implements the useEffect hook. Sends the user to the translations page if the username is not empty.
   * If user is not empty dispatch some methods from redux store to initiate a session, as well as reset the user to initial state.
   * After, send the user to the translation page.
   */
  useEffect(() => {
    // This happens if there is already a session.
    if (username !== "") {
      history.push("/translations");
    }
    // This happens when user clicks the login button.
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
      {loginError && (
        <p className={`${styles.loading} ${styles.error}`}>{loginError}</p>
      )}
    </>
  );
};

export default Login;
