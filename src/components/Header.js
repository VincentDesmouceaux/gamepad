import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  return (
    <header>
      <div className="header page__header">
        <div className="header__wrapper">
          <div className="header__item">
            <Link to={`/`} className="header__item-link header-logo">
              <div className="logo">RAWG</div>
            </Link>
          </div>
          <div className="header__item header__item_search">
            <div className="header__item header__item_center header__search">
              <form className="header__search__form">
                <div className="header__search__input__area">
                  <input
                    className="header__search__input"
                    type="text"
                    value={search}
                    placeholder="Search..."
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="header__item">
            <Link to={`/login`} className="header__item-link ">
              LOG IN
            </Link>
            <Link to={`/SignUp`} className="header__item-link ">
              SIGN UP
            </Link>
            <div className="header__item-link "> API </div>
            <div className="header-menu">...</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
