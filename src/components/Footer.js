import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div className=" font-bold flex flex-col justify-end items-center">
      {user.name} - {user.email}
    </div>
  );
};

export default Footer;
