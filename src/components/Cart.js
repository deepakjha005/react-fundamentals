import { useContext } from "react";
import userContext from "./UserContext";

const Cart = () => {
  const { cartItem } = useContext(userContext);

  console.log(cartItem);
  return (
    <div className="bg-gray-100 self-center m-auto w-[300px] h-auto rounded-lg">
      <div className="p-2 font-bold text-center text-xl">
        {cartItem.restaurantName}
      </div>
      <div className="flex justify-between p-2 ">
        <div>{cartItem.itemName}</div>
        <div>₹{cartItem.price}</div>
      </div>
    </div>
  );
};
export default Cart;
