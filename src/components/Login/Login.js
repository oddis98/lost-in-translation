import "./login.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction } from "../../store/actions/loginActions";
import { sessionSetAction } from "../../store/actions/sessionActions";

const Login = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { loginError, loginAttempting, user } = useSelector(
    (state) => state.loginReducer
  );

  const history = useHistory();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onButtonClick = () => {
    dispatch(loginAttemptAction(input));
  };

  useEffect(() => {
    if (user !== "") {
      dispatch(sessionSetAction(user));
      history.push("/translations");
    }
  }, [user]);

  return (
    <>
      <div className="outerContainer">
        <div className="container">
          <div className="inputContainer">
            <SportsEsportsOutlinedIcon fontSize="large" />
            <input
              className="input"
              placeholder="What's your name?"
              onChange={onInputChange}
            />

            <button className="btn-login" onClick={onButtonClick}>
              <ArrowForward />
            </button>
          </div>
        </div>
        <div className="purpleDiv"></div>
      </div>
      {loginAttempting && <p>Loading...</p>}
      <p>{user.username}</p>
      {loginError && <p>{loginError}</p>}
    </>
  );
};

export default Login;
