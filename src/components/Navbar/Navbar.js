import { useDispatch, useSelector } from 'react-redux';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import styles from './navbar.module.css';
import { useHistory } from 'react-router-dom';
import { translateClearAction } from '../../store/actions/translateActions';

const Navbar = (props) => {
  const { username } = useSelector((state) => state.sessionReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const redirect = () => {
    dispatch(translateClearAction());
    history.push('/profile');
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>Lost in translation</h1>
      {props.profile && (
        <div className={styles.profile} onClick={redirect}>
          <p className={styles.username}>{username}</p>
          <AccountCircleTwoToneIcon
            fontSize="large"
            className={styles.profileIcon}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
