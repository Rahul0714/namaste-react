import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";

const Restaurants = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6774769&lng=73.8512324&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!isOnline) {
    return <h1>Oops! No Internet</h1>;
  }

  return !allRestaurants ? (
    <div className="flex flex-wrap">
      {Array.from("FoodZillaFoodApp").map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="h-screen w-full">
      <div className="h-[70px] w-full shadow-sm flex items-center">
        <input
          className="mx-4 outline-none p-2 border-b-gray-400 rounded-md border"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 bg-gray-500 rounded-md text-white font-semibold outline-none hover:bg-gray-600"
          onClick={() =>
            setFilteredRestaurants(
              allRestaurants.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            )
          }
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        {filteredRestaurants?.length === 0 ? (
          <div className="text-xl ">Item Not Found😑</div>
        ) : (
          filteredRestaurants.map((resData, index) => (
            <RestaurantCard key={resData?.info?.id} restaurant={resData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
