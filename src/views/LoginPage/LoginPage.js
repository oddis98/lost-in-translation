import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./loginPage.module.css";

const LoginPage = (props) => {
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
