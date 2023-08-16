import { Link } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useOnline from "../utils/useOnline";

const Navbar = () => {
  const isOnline = useOnline();

  return (
    <div className="h-20 w-full border flex justify-between items-center p-4 bg-red-500 text-white font-mono font-semibold shadow-lg">
      <div className="mx-4 text-5xl text-white">
        <SiIfood />
      </div>
      <div className="text-4xl tracking-widest text-gray-100">FoodZilla</div>
      <div className="flex items-center gap-3 text-lg">
        <div className="p-2 bg-white rounded-md text-red-600 hover:bg-red-500 hover:text-white cursor-pointer hover:border hover:border-white">
          {isOnline ? "Online" : "Offline"}
        </div>

        <div className="cursor-pointer">
          <Link to="/">Home</Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/about">About Us</Link>
        </div>
        <div className="text-2xl cursor-pointer">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
