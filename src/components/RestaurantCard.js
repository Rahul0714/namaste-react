import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      className="w-[200px] border border-gray-500 m-4 flex flex-col rounded-md hover:scale-105 p-2 cursor-pointer"
      onClick={() => console.log("clicked")}
      to={`restaurant/${restaurant?.info?.id}`}
    >
      <img
        className="w-[200px] h-[200px] object-cover p-2"
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          `${restaurant?.info?.cloudinaryImageId}`
        }
        alt=""
      />
      <h1 className="text-lg font-semibold text-center">
        {restaurant?.info?.name}
      </h1>
      <h2 className="text-gray-600">{restaurant?.info?.costForTwo}</h2>
      <h2>Average Rating: {restaurant?.info?.avgRating}</h2>

      <h4>{restaurant?.info?.cuisines.join(", ")}</h4>
    </Link>
  );
};

export default RestaurantCard;
