import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ link, title, className }) => {
  return (
    <Link
      to={link}
      className={`**:md:px-5 px-4 md:py-4 py-3 inline-flex items-center justify-center text-sm md:text-[17px] rounded bg-secondary hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out font-medium ${className}`}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
