import styles from "./profile.module.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { sessionDeleteAction } from "../../store/actions/sessionActions";
import { translateDeleteAction } from "../../store/actions/translateActions";

const Profile = () => {
  const { username, translations } = useSelector(
    (state) => state.sessionReducer
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const onLogOutButtonClick = () => {
    dispatch(sessionDeleteAction());
  };

  const onClearButtonClick = () => {
    dispatch(translateDeleteAction());
  };

  const onReturnButtonClick = () => {
    history.push("/translations");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <AccountCircleTwoToneIcon className={styles.profilePic} />
          <h4 className={styles.username}>{username}</h4>
          <h5 className={styles.lastTranslations}>Last translations</h5>
          <ul className={styles.translationsContainer}>
            {translations
              .map((translation, index) => {
                return (
                  <li key={index} className={styles.translations}>
                    {translation}
                  </li>
                );
              })
              .slice(Math.max(translations.length - 10, 0))}
          </ul>
        </div>
        <div className={styles.purpleDiv}>
          <button onClick={onClearButtonClick} className={styles.translateTag}>
            Clear translations
          </button>
          <div className={styles.return}>
            <button
              onClick={onReturnButtonClick}
              className={styles.translateTag}
            >
              Translate
            </button>
          </div>
          <button onClick={onLogOutButtonClick} className={styles.translateTag}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
