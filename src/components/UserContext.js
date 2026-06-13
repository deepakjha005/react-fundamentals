const { createContext } = require("react");

const userContext = createContext({
  userName: "Deepak Jha",
  cartItem: {
    restaurantName: "",
    itemName: "",
    price: "",
  },
});

export default userContext;
