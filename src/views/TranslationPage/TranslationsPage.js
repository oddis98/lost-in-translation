import Translation from "../../components/Translation/Translation";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const TranslationsPage = () => {
  const { username } = useSelector((state) => state.sessionReducer);

  const history = useHistory();

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
