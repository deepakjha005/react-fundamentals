import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { Error } from "./components/Error";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
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
    ],
    errorElement: <Error />,
  },
]);
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<RouterProvider router={appRoute} />);
