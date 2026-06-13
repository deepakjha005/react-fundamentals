import user from "./UserContext";

const RestaurantCard = (props) => {
  const {
    name,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
    veg,
    sla: { deliveryTime },
  } = props.data?.info;
  user.name = "name has changed";
  return (
    <div className="mb-2 w-[250px] h-[400px] mr-4 border border-gray-300 rounded-xl shadow-md">
      {}
      <label className="m-1 p-2 absolute bg-gray-500 text-white rounded-md">
        {veg ? "Veg" : "Non-Veg"}
      </label>
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="h-[220px] w-[250px] rounded-t-lg"
        />
      </div>
      <div className="text-center mt-4">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm mt-2">{cuisines.join(" , ")}</p>
        <p className="text-sm"> {avgRatingString}</p>
        <p className="text-sm">{deliveryTime} min</p>
      </div>
    </div>
  );
};

export const withVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-1 p-2 absolute bg-gray-500 text-white rounded-md">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
