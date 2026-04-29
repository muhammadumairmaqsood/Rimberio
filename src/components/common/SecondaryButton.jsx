import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({ link, title,className }) => {
  return (
    <Link to={link} className={`md:px-6 px-4 md:py-[13px] text-white py-3 inline-block text-sm md:text-[17px] rounded bg-transparent  border-[2px] border-white hover:bg-white hover:text-black  transition-all duration-300 ease-in-out font-medium ${className}`}>
     {title}
    </Link>
  );
};

export default SecondaryButton;
