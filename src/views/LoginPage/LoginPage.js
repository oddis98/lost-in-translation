import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./loginPage.module.css";

/**
 * @returns a navbar component and a div containing a header component and a login component.
 */
const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.LoginPage}>
        <Header />
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
