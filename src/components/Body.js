import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useCheckOnlineHook from "./hooks/useCheckOnlineHook";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [updatedFilteredList, setUpdatedFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const isOnline = useCheckOnlineHook();
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
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          placeholder="Search"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            filterList(e.target.value);
          }}
        />
      </div>
      {updatedFilteredList.length === 0 ? (
        <NotFound />
      ) : (
        <div className="card-cont">
          {updatedFilteredList.map((item) => (
            <div
              key={item?.info?.id}
              onClick={() => navigate("/restaurantMenu/" + item?.info?.id)}
            >
              <RestaurantCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
