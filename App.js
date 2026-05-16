import ReactDOM from "react-dom/client";
import { restaurantData } from "./data";

/**
 * UI structure.
 *
 * 1. Header - logo and nav bar items.
 * 2. Body - Search Bar and Restaurant container
 *    (i). Search Bar.
 *    (ii). Restaurant Container -
 *                  i.Restaurant Card
 *                       Dish Name
 *                       restaurant name
 *                       cuisine name
 *                       restaurant image
 *
 */
const headerData = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Contact Us",
  },
  {
    id: 3,
    label: "About Us",
  },
  {
    id: 4,
    label: "Cart",
  },
];
const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="img-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigfY6ii345rZClg3IEkzRTS_nRIZ8nyIN-Q&s"
          className="img-style"
        />
      </div>
      <div className="nav-container">
        {headerData.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const SearchBox = () => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for restaurants and food"
      className="input-box"
    />
  </div>
);
const RestaurantCard = (props) => {
  const { image, restaurantName, cuisineName, deliveryTime, rating } =
    props.data;
  return (
    <div className="restaurant-container">
      <div>
        <img src={image} className="card-img" />
      </div>
      <div className="text-container">
        <h4>{restaurantName}</h4>
        <h4>{cuisineName.join(" , ")}</h4>
        <h4>{rating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};
const BodyContent = () => {
  return (
    <>
      <SearchBox />
      <div className="card-cont">
        {restaurantData.map((item) => (
          <div key={item?.id}>
            <RestaurantCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};
const App = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyContent />
    </div>
  );
};
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<App />);
