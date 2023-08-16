import React from "react";
import reactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Restaurants /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {},
          {
            path: "/about/profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantMenu />,
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
