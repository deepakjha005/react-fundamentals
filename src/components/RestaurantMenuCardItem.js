const RestaurantMenuCardItem = ({ itemCard }) => {
  console.log(itemCard, "data");
  return (
    <div>
      {itemCard.map((item) => (
        <div
          className="bg-gray-200 mt-3 shadow-t-sm rounded-t-lg  flex justify-between m-auto border-t-2 border-r-2 border-gray-300"
          key={item?.card?.info?.id}
        >
          <div className="my-auto">
            <p className="text-sm ml-2">{item?.card?.info?.name}</p>
            <p className="text-sm ml-2">{item?.card?.info?.description}</p>
            <p className="text-sm ml-2"> ₹{item?.card?.info?.price / 100}</p>
          </div>
          <div className="w-36">
            <img
              className="rounded-lg"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenuCardItem;
