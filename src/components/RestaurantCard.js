const RestaurantCard = (props) => {
  const {
    name,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = props.data?.info;
  return (
    <div className="restaurant-container">
      <label className="m-1 p-2 absolute bg-black text-white">Non-Veg</label>
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="card-img"
        />
      </div>
      <div className="text-container">
        <p>{name}</p>
        <p>{cuisines.join(" , ")}</p>
        <p>{avgRatingString}</p>
        <p>{deliveryTime} min</p>
      </div>
    </div>
  );
};

export const withVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-1 p-2 absolute bg-black text-white">Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
