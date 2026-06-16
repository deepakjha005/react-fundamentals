import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../redux/cartSlice";
// import userContext from "./UserContext";
const RestaurantMenuCardItem = ({ itemCard, showRemove }) => {
  // const { setCartItem } = useContext(userContext);
  // const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    if (showRemove) {
      dispatch(removeItem(item?.card?.info?.id));
      return;
    }
    dispatch(addItems(item));
  };
  return (
    <div className="flex justify-center">
      <div className="w-[100%]">
        {itemCard?.map((item) => (
          <div
            className="bg-gray-200 mt-3 shadow-t-sm rounded-t-lg  flex justify-between m-auto border-t-2 border-r-2 border-gray-300"
            key={item?.card?.info?.id}
            data-testid="menuCardItem"
          >
            <div className="my-auto">
              <p className="text-sm ml-2">{item?.card?.info?.name}</p>
              <p className="text-sm ml-2">{item?.card?.info?.description}</p>
              <p className="text-sm ml-2"> ₹{item?.card?.info?.price / 100}</p>
            </div>
            <div className="w-36 relative">
              <img
                className="rounded-lg"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
                alt=""
              />
              <button
                className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md h-10 cursor-pointer"
                onClick={() => addToCart(item)}
              >
                {showRemove ? "Remove" : "ADD"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* {showToast && (
        <div
          className="fixed bottom-20  bg-gray-400 text-black px-4 py-2 rounded-lg"
          onClick={() => navigate("/cart")}
        >
          View Cart
        </div>
      )} */}
    </div>
  );
};
export default RestaurantMenuCardItem;
