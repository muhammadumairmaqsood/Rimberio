import icons from "@/utils/icons";
import images from "@/utils/images";
import React from "react";
import { Link } from "react-router-dom";
const OurProgrammes = () => {
  const data = [
    {
      id: 1,
      img: images.ourp1,
      title: "Early Years Programm",
      btnText: "AGES 4.5+",
      para: "Play-based inquiry learning for Early Years (EY)",
      buttonText: " Discover Early Years",
      link: "early-years",
    },
    {
      id: 2,
      img: images.ourp2,
      title: "Primary Years Programm",
      btnText: "PYP-1 TO PYP-4",
      para: "IB PYP curriculum for holistic development",
      buttonText: " Discover Primary Years",
      link: "primary-years",
    },
    {
      id: 3,
      img: images.ourp3,
      title: "Cambridge Primary",
      btnText: "KINDERGARTEN - GRADE 2",
      para: "Cambridge IGCSE Curriculum for global education pathways",
      buttonText: " Discover Cambridge Primary",
      link: "cambridge-primary",
    },
  ];
  return (
    <div className="w-full px-10 bg-[#F2F2F2] dark:bg-black py-[50px] md:pt-[100px] pb-[60px]">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-xl font-medium md:text-4xl text-center"
      >
        Our Programmes
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="md:text-[16px] text-[13px] text-sidebar-ring text-center mt-2"
      >
        Nurturing curious minds from ages 4.5+
      </p>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid grid-cols-1 py-[60px] md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-5"
      >
        {data.map((item) => (
          <div key={item.id} className=" w-full cursor-pointer group relative">
            <div className="w-full rounded-lg  h-90 cursor-pointe relative overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transform transition-all duration-300 ease-in-out" />

              <div className="absolute w-full inset-0 top-0 left-0 rounded-lg bg-black/40"></div>
              <div className="absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 text-white">
                <h1 className="text-lg md:text-2xl font-semibold uppercase">
                  {item.title}
                </h1>
              </div>
            </div>
            {/* //? ib logo */}
            <div className="absolute -top-5 -right-5 shadow-lg w-18 h-18 bg-white flex items-center justify-center rounded-full">
              <img
                src={images.ib}
                className="md:w-[90%] md:h-[90%] w-full h-full  rounded-full object-center object-cover"
              />
            </div>
            <div className="absolute bottom-0 rounded-bl-lg rounded-br-lg w-full h-auto py-5 z-50 left-0 bg-black/60 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <button className="absolute top-4 md:top-2 text-[13px] left-5 rounded bg-secondary px-3 py-1 cursor-pointer">
                {item.btnText}
              </button>
              <p className="text-white text-[13px] md:text-[15px] p-3 mt-3">
                {item.para}
              </p>
              <Link
                to={item.link}
                className="flex items-center justify-start px-3 text-white gap-1"
              >
                {item.buttonText}
                <icons.forwardarror size={23} />
              </Link>
            </div>
            {/* //? ib logo */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProgrammes;
