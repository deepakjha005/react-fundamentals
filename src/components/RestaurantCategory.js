import RestaurantMenuCardItem from "./RestaurantMenuCardItem";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  return (
    <div className="bg-gray-100 m-2 h-auto p-2 rounded-md shadow-md my-4 cursor-pointer">
      <div
        className=" flex justify-between"
        onClick={() => setShowIndex()}
        data-testid="accordianClick"
      >
        <p className="font-semibold">{data?.card?.card?.title}</p>
        <p>↓</p>
      </div>
      <div>
        {showIndex && (
          <RestaurantMenuCardItem itemCard={data?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
