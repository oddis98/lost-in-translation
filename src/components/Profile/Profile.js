import styles from "./profile.module.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username, translations } = useSelector(
    (state) => state.sessionReducer
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <AccountCircleTwoToneIcon className={styles.profilePic} />
          <h4 className={styles.username}>{username}</h4>
          <ul>
            {translations.map((translation, index) => {
              return <li key={index}>{translation}</li>;
            })}
          </ul>
        </div>
        <div className={styles.purpleDiv}>
          <p className={styles.translateTag}>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
