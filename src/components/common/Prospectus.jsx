import React from "react";
import PrimaryButton from "./PrimaryButton";

const Prospectus = () => {
  return (
    <div className="w-[90%] mx-auto my-[50px] flex items-center justify-between">
      <h3 className="text-[14px] md:text-2xl font-semibold">School Prospect</h3>
      <PrimaryButton link={"/"} title={"Download PDF"} />
    </div>
  );
};

export default Prospectus;
