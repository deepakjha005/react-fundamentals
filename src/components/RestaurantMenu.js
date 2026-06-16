import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState();
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurantMenu/" + id
      );
      const json = await response.json();
      const filterMenuData =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (res) =>
            res.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setMenuData(filterMenuData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="w-6/12 self-center m-auto">
      {menuData?.map((data, index) => (
        // Controlled Component
        <RestaurantCategory
          data={data}
          key={data?.card?.card?.title}
          showIndex={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)} // lifting the state up
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
