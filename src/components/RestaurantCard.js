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
export default RestaurantCard;
