import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";

/**
 * @returns a react fragment containing a navbar component as well as a profile component.
 */
const ProfilePage = () => {
  // Implements username from redux store and utializes the useHistory hook.
  const { username } = useSelector((state) => state.sessionReducer);
  const history = useHistory();

  // If username is empty, push user to login page.
  useEffect(() => {
    if (username === "") {
      history.push("/");
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
