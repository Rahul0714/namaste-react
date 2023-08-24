import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantInfo = useRestaurantMenu(id);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-3xl">
        {restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}
      </h1>
      <button
        className="p-2 my-10 border rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold"
        onClick={handleAddItem}
      >
        Add Item
      </button>
    </div>
  );
};

export default RestaurantMenu;
