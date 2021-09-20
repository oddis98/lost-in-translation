import "./header.css";
import Image from "../../assets/Logo-Hello.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoDiv">
        <svg
          className="svg"
          width="295"
          height="223"
          viewBox="0 0 295 223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M94.7158 61.5125C81.5158 74.7125 57.2159 61.5125 33.2158 76.5125C-27.2842 110.513 3.7157 207.013 55.7158 191.013C122.758 170.384 144.216 218.013 228.216 222.513C312.216 227.013 305.716 118.513 265.716 109.013C212.452 96.3623 257.716 35.5125 194.716 7.01252C131.716 -21.4875 111.216 45.0125 94.7158 61.5125Z"
            fill="white"
          />
        </svg>
        <img className="logo" src={Image} alt="happy robot" />
      </div>

      <div>
        <h1 className="subHeaderText">Lost in Translation</h1>
        <p className="subSubHeaderText">Get Started</p>
      </div>
    </div>
  );
};

export default Header;
