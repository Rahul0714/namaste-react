import React, { Suspense, lazy, useState } from "react";
import reactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const App = () => {
  const [user, setUser] = useState({
    name: "Rahul Mujumdar",
    email: "rahul@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <Navbar />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
