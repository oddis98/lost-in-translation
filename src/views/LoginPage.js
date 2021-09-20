import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <>
      <div className="header">
        <h1 className="headerText">Lost in translation</h1>
      </div>
      <div className="LoginPage">
        <Header />
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
