import hero from "@/assets/hero.mp4";
import Difference from "@/components/common/Difference";
import ExperienceOurCampus from "@/components/common/ExperienceOurCampus";
import GetInTouch from "@/components/common/GetInTouch";
import JourneySection from "@/components/common/JourneySection";
import Mission from "@/components/common/Mission";
import OurProgrammes from "@/components/common/OurProgrammes";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import WhoWe from "@/components/common/WhoWe";
import icons from "@/utils/icons";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
const Home = () => {
  const data = [
    {
      id: 1,
      icn: icons.location,
      detail: "17-Acre Campus",
    },
    {
      id: 2,
      icn: icons.award,
      detail: "IB Authorized",
    },
    {
      id: 3,
      icn: icons.school,
      detail: "Cambridge IGCSE",
    },
    {
      id: 4,
      icn: icons.building,
      detail: "Pakistan's First Indoor Riding Arena",
    },
    {
      id: 5,
      icn: icons.users,
      detail: "Ages 4.5+",
    },
  ];
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const toggleVide = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return (
    <div className="w-full">
      {/* 🎬 HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          ref={videoRef}
        >
          <source src={hero} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Button */}
        <button
          onClick={toggleVide}
          className="absolute flex items-center justify-center cursor-pointer bottom-10 left-10 z-50 w-14 h-14 rounded-full bg-[#800000]"
        >
          {isMuted ? (
            <VolumeX size={23} color="white" />
          ) : (
            <Volume2 size={24} color="white" />
          )}
        </button>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl tracking-wide  md:text-5xl font-semibold">
            Rimbero Internation School
          </h2>
          <p className="text-white text-[13px] md:text-xl mt-1 md:mt-3">
            A School Where Your Child Learns, Grows, and Belongs.
          </p>
          <div className="flex gap-2 mt-10 md:mt-15">
            <PrimaryButton link={"/"} title="Explore Programmes" />
            <SecondaryButton link={"/contact"} title={"Schedule a Visit"} />
          </div>
        </div>
      </div>

      {/* 📊 NEXT SECTION (ab properly show hoga) */}
      <div className="w-full bg-background grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:px-10 px-5  py-10">
        {data.map((item) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="bg-card flex items-center justify-center md:py-4 flex-col gap-5 rounded-md"
          >
            <item.icn size={26} className="text-secondary mt-2 md:mt-0" />
            <span className="font-semibold text-[14px] text-center p-2">
              {item.detail}
            </span>
          </div>
        ))}
      </div>
      {/* //? Wo We Are */}
      <WhoWe />
      {/* //? Wo We Are */}
      {/* //! Our Programmes */}
      <OurProgrammes />
      {/* //! Our Programmes */}
      {/* //? Experience our campus */}
      <ExperienceOurCampus />
      {/* //? Experience our campus */}
      {/* //! School Mission  */}
      <Mission />
      {/* //! School Mission */}
      {/* //? Differce */}
      <Difference />
      {/* //? Differnce */}
      {/* //! Fixed Section  */}
      <JourneySection />
      {/* //!  Fixed Section */}
      {/* //? Get In Touch */}
      <GetInTouch />
      {/* //? Get In Touch */}
    </div>
  );
};

export default Home;
