import Translation from "../../components/Translation/Translation";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

/**
 * @returns a navbar component as well as a translation component.
 */
const TranslationsPage = () => {
  // implements username from redux store and utializes the useHistory hook.
  const { username } = useSelector((state) => state.sessionReducer);
  const history = useHistory();

  // If username is empty, push user to login page.
  useEffect(() => {
    if (username === "") {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Navbar profile />
      <Translation />
    </>
  );
};

export default TranslationsPage;
