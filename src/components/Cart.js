import { useContext } from "react";
import { useSelector } from "react-redux";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";
import userContext from "./UserContext";

const Cart = () => {
  const { cartItem } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItem);
  return (
    <div className="bg-gray-100 self-center m-auto w-6/12 h-auto rounded-lg">
      <RestaurantMenuCardItem itemCard={cartItems} showRemove={true} />
    </div>
  );
};
export default Cart;
