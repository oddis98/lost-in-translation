import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <SportsEsportsOutlinedIcon fontSize="large" />
          <input
            id="input"
            className={styles.input}
            placeholder={props.placeholder}
            onChange={props.onInputChange}
          />

          <button className={styles.btnLogin} onClick={props.onButtonClick}>
            <ArrowForward />
          </button>
        </div>
      </div>
      <div className={styles.purpleDiv}></div>
    </div>
  );
};

export default Input;
