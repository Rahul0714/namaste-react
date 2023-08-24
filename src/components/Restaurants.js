import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";

const Restaurants = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useRestaurant();
  const [filteredRestaurants, setFilteredRestaurants] = useRestaurant();

  const isOnline = useOnline();

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
    <div className="h-full w-full">
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
