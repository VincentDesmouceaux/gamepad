import { Link } from "react-router-dom";

import rawg from "../img/rawg.png";

const Header = ({ search, setSearch }) => {
  return (
    <header>
      <div className="header-container">
        <img src={rawg} alt="logo" className="header-logo" />

        <p> JE suis le HEADER</p>
      </div>
    </header>
  );
};

export default Header;
