import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { Error } from "./components/Error";
import Header from "./components/Header";
import React, { Suspense } from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const HeavyComponent = React.lazy(()=>import("./components/HeavyModule"));

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
        path: "/lazyLoading",
        element: <Suspense fallback={'loading.......'}><HeavyComponent/></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<RouterProvider router={appRoute} />);
