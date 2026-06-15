import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { Error } from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./components/UserContext";
import appStore from "./redux/appStore";
const App = () => {
  const [updateUserName, setUpdateUserName] = useState();
  const [cartItem, setCartItem] = useState({
    restaurantName: "",
    itemName: "",
    price: "",
  });

  useEffect(() => {
    const data = {
      name: "Sumit",
    };
    setUpdateUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{
          userName: updateUserName,
          setUpdateUserName,
          cartItem: cartItem,
          setCartItem,
        }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const HeavyComponent = React.lazy(() => import("./components/HeavyModule"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/lazyLoading",
        element: (
          <Suspense fallback={"loading......."}>
            <HeavyComponent />
          </Suspense>
        ),
      },
      {
        path: "/restaurantMenu/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<RouterProvider router={appRoute} />);
