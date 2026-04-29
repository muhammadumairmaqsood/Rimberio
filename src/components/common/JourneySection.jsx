import images from "@/utils/images";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const JourneySection = () => {
  return (
    <div
      className="w-full relative px-10 h-82 bg-no-repeat bg-center bg-cover bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${images.bgfix})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent"></div>
      {/* //?Content */}
      <div className="relative h-full flex flex-col items-center justify-center gap-4 text-white">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-2xl lg:text-6xl md:text-5xl font-bold"
        >
          Begin Your Child's Journey
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:text-[17px] text-[14px] text-muted"
        >
          Applications now open for 2026-2027
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center gap-3 mt-7"
        >
          <PrimaryButton title={"Schedule a Visit"} link={"/contact"} />
          <SecondaryButton title={"Start Application"} link={"/admissions"} />
        </div>
      </div>
      {/* //?Content */}
    </div>
  );
};

export default JourneySection;
