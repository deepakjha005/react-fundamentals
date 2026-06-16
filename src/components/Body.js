import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import RestaurantCard, { withVegRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useCheckOnlineHook from "./hooks/useCheckOnlineHook";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [updatedFilteredList, setUpdatedFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const isOnline = useCheckOnlineHook();
  const HighOrderComponent = withVegRestaurantCard(RestaurantCard);
  const filterList = (text) => {
    const updatedList = filteredList?.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setUpdatedFilteredList(updatedList);
  };
  useEffect(() => {
    console.log("called after");
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants"
      );
      const json = await response.json();
      setFilteredList(
        json?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setUpdatedFilteredList(
        json?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error:", error);
    }
  };
  if (!isOnline)
    return <h1>You are offline. Please check your internet connection</h1>;
  if (filteredList.length === 0) {
    return <Shimmer />;
  }
  const onCardClick = (id) => {
    navigate("/restaurantMenu/" + id);
  };
  return (
    <div className="body-container">
      <div className=" mx-8 mb-5 flex">
        <input
          placeholder="Search"
          className="h-9 w-48 border border-gray-400 rounded-lg p-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            filterList(e.target.value);
          }}
        />
        <button className="bg-blue-400 ml-2 rounded-lg shadow-sm text-sm w-24">
          Search
        </button>
      </div>
      {updatedFilteredList.length === 0 ? (
        <NotFound />
      ) : (
        <div className=" flex flex-wrap justify-start ml-8">
          {updatedFilteredList.map((item) => (
            <div
              key={item?.info?.id}
              onClick={() => onCardClick(item?.info?.id)}
            >
              {item.info.veg ? (
                <HighOrderComponent data={item} />
              ) : (
                <RestaurantCard data={item} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
