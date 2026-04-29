import AdmissionForm from "@/components/common/AdmissionForm";
import Prospectus from "@/components/common/Prospectus";
import images from "@/utils/images";
import { useState } from "react";

const Admissions = () => {
  const [active, setActive] = useState("apply");
  return (
    <div className="w-full">
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.community})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative z-10 text-center px-4"
        >
          <button
            className={`md:px-8 px-6 md:py-[11px] text-white py-2 inline-block text-sm md:text-[17px] rounded bg-transparent  border-[2px] border-white font-medium`}
          >
            Join our Community
          </button>
          <h1 className="text-2xl font-bold   md:text-5xl lg:text-7xl text-white font-semibold">
            Admissions
          </h1>
          <p className="text-[12px] w-[90%] lg:w-[80%] mx-auto md:text-[18px] mt-2 md:mt-4 mb-12 text-white">
            Join our community of lifelong learners and future global citizens.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto md:w-[68%] lg:w-[38%] bg-[#F3EFE7] py-2 items-center justify-center flex gap-2 px-2 rounded-md my-[40px]">
        <button
          onClick={() => setActive("prospect")}
          className={`cursor-pointer px-1 md:px-4 text-[14px] md:text-lg  py-1  rounded-md  ${active === "prospect" ? "bg-[#AE091F] text-white" : "bg-transparent text-black"}`}
        >
          School Prospectus
        </button>
        <button
          onClick={() => setActive("apply")}
          className={`cursor-pointer px-1 md:px-4 text-[14px] md:text-lg   py-1  rounded-md ${active === "apply" ? "bg-[#AE091F] text-white" : "bg-transparent text-black"}`}
        >
          Apply Online for Camberdge
        </button>
      </div>
      <div className="mt-6 p-6 bg-white rounded-xl shadow">
        {active === "prospect" ? <Prospectus /> : <AdmissionForm />}
      </div>
    </div>
  );
};

export default Admissions;
