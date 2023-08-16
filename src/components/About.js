import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">About Us</h1>
      <Link to="/about/profile">
        <div className="p-2 m-4 bg-blue-500 hover:bg-blue-700 mt-10 w-fit">
          Profile
        </div>
      </Link>
      <Outlet />
    </div>
  );
};

export default About;
