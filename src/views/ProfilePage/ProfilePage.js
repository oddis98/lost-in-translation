import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
  const { username } = useSelector((state) => state.sessionReducer);

  const history = useHistory();

  useEffect(() => {
    if (username === '') {
      history.push('/');
    }
  }, [username]);

  return (
    <>
      <Navbar profile />
      <Profile />
    </>
  );
};

export default ProfilePage;
