import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getMenuData();
  }, []);

  async function getMenuData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6774769&lng=73.8512324&restaurantId=${id}`
    );
    const json = await data.json();
    setRestaurantMenu(json);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
