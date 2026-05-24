import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constants";
import { headerData } from "../utils/headerData";

const Header = () => {
  return (
    <div className="header-component">
      <div className="img-container">
        <img src={HEADER_LOGO} className="img-style" />
      </div>
      <div className="nav-container">
        {headerData.map((item) => {
          return (
            <div key={item.id}>
              <Link to={item.link}>
                <h3>{item.label}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
