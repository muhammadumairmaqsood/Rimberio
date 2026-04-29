import React from "react";

const Mission = () => {
  return (
    <div className="w-full flex-col md:flex-row px-2 md:px-10 flex gap-2 items-center justify-center pb-[60px]">
      <div data-aos="zoom-in" data-aos-delay="100" className="md:w-1/2 w-full bg-secondary px-5 py-[80px]">
        <div className="lg:w-[80%] w-[95%] mx-auto flex flex-col gap-4">
          <p className="text-[13px] font-semibold text-primary tracking-wide">
            OUR MISSION
          </p>
          <h1 className="text-lg md:text-3xl lg:text-4xl tracking-wider leading-[25px] md:leading-[40px] font-semibold  text-background">
            Developing Inquiring Young Leaders
          </h1>
          <p className="text-[14px] text-background tracking-wide">
            The School aspires to develop inquiring young leaders, critical
            thinkers and global citizens by providing them an engaging and
            challenging environment. Together they will create a progressive,
            caring and tolerant society and become pillars of a moderate,
            inclusive and a peaceful tomorrow.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200"  className="md:w-1/2 w-full bg-[#F9ECEC] px-5 py-[80px]">
        <div className="lg:w-[80%] w-[95%] mx-auto flex flex-col gap-4">
          <p className="text-[13px] font-semibold text-gray-500 tracking-wide">
            Our Philosophy
          </p>
          <h1 className="text-lg md:text-3xl lg:text-4xl tracking-wider leading-[25px] md:leading-[40px] font-semibold  text-black">
            Fostering Growth in All Areas
          </h1>
          <p className="text-[14px] text-zinc-700 tracking-wide">
            At Rimberio, our philosophy is to support students' academic,
            social, and emotional growth, nurturing confident, balanced
            individuals. Strong foundations in the Early and Primary Years
            prepare our learners to think critically, adapt confidently, and
            become future contributors to a changing world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
