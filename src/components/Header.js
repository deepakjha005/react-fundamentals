import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constants";
import { headerData } from "../utils/headerData";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between align-middle pt-2 shadow-md mb-10">
      <div className="w-14">
        <img src={HEADER_LOGO} className="img-style" alt="" />
      </div>
      <div className="flex">
        {headerData?.map((item) => {
          return (
            <div key={item.id} className="p-4">
              <Link to={item.link}>
                <h3>
                  {item.label === "Cart"
                    ? item.label + "(" + cartItems.length + ")"
                    : item.label}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

//Cart(0)
