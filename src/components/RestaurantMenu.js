import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantInfo = useRestaurantMenu(id);

  return (
    <h1 className="text-center text-3xl">
      {restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}
    </h1>
  );
};

export default RestaurantMenu;
