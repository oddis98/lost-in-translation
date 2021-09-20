import "./login.css";
import { useState } from "react";
import { LoginAPI } from "../../api/LoginAPI";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

const Login = () => {
  const [input, setInput] = useState();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const tryLogin = async () => {
    try {
      const user = await LoginAPI.login({ username: input });
      if (user.length === "0") {
        await LoginAPI.register({ username: input });
        const newUser = await LoginAPI.login({ username: input });
        return newUser[0];
      }
      return user[0];
    } catch (e) {
      console.error(e);
    }
  };

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

            <button className="btn-login" onClick={tryLogin}>
              <ArrowForward />
            </button>
          </div>
        </div>
        <div className="purpleDiv"></div>
      </div>
    </>
  );
};

export default Login;
