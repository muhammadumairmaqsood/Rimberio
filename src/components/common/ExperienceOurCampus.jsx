import images from "@/utils/images";
import React from "react";

const ExperienceOurCampus = () => {
  return (
    <div className="w-full px-10 bg-background py-[80px]">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-xl font-medium md:text-4xl text-center"
      >
        Experience Our Campus
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="md:text-[16px] text-[13px] text-sidebar-ring text-center mt-3"
      >
        17 acres of discovery, adventure, and growth
      </p>
      <div className="flex items-center justify-center md:flex-row flex-col w-full h-full mt-10 gap-5">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-1/2 w-full lg:h-105 md:h-70 h-60 overflow-hidden rounded-md group relative"
        >
          <img
            src={images.hors}
            className="w-full h-full object-cover cursor-pointer group-hover:scale-125 transform transition-all duration-300 ease-in-out object-center rounded-md z-50"
          />
          <div className="absolute top-0 left-0 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform  rounded-md cursor-pointer"></div>
          <div className="absolute bottom-7 opacity-0 translate-y-2 group-hover:translate-0 group-hover:opacity-100 transform transition-all duration-500 ease-in-out left-5 rounded-bl-md rounded-br-md">
            <h1 className="text-lg text-white font-normal">
              Horse Riding Arena
            </h1>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="grid grid-cols-2 w-full md:w-1/2 gap-3"
        >
          <div className="w-full h-full overflow-hidden group relative">
            <img
              src={images.swimming}
              className=" w-full h-full rounded-md object-cover cursor-pointer group-hover:scale-125 transform transition-all duration-300 ease-in-out"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform  rounded-md cursor-pointer"></div>
            <div className="absolute bottom-7 opacity-0 translate-y-2 group-hover:translate-0 group-hover:opacity-100 transform transition-all duration-500 ease-in-out left-5 rounded-bl-md rounded-br-md">
              <h1 className="text-lg text-white font-normal">Swimming</h1>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden group relative">
            <img
              src={images.study}
              className=" w-full h-full rounded-md object-cover cursor-pointer group-hover:scale-125 transform transition-all duration-300 ease-in-out"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform  rounded-md cursor-pointer"></div>
            <div className="absolute bottom-7 opacity-0 translate-y-2 group-hover:translate-0 group-hover:opacity-100 transform transition-all duration-500 ease-in-out left-5 rounded-bl-md rounded-br-md">
              <h1 className="text-lg text-white font-normal">Studying</h1>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden group relative">
            <img
              src={images.school}
              className=" w-full h-full rounded-md object-cover cursor-pointer group-hover:scale-125 transform transition-all duration-300 ease-in-out"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform  rounded-md cursor-pointer"></div>
            <div className="absolute bottom-7 opacity-0 translate-y-2 group-hover:translate-0 group-hover:opacity-100 transform transition-all duration-500 ease-in-out left-5 rounded-bl-md rounded-br-md">
              <h1 className="text-lg text-white font-normal">
                Outdoor Learning
              </h1>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <img
              src={images.taekwondo}
              className=" w-full h-full rounded-md object-cover cursor-pointer group-hover:scale-125 transform transition-all duration-300 ease-in-out"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform  rounded-md cursor-pointer"></div>
            <div className="absolute bottom-7 opacity-0 translate-y-2 group-hover:translate-0 group-hover:opacity-100 transform transition-all duration-500 ease-in-out left-5 rounded-bl-md rounded-br-md">
              <h1 className="text-lg text-white font-normal">Taekwondo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceOurCampus;
