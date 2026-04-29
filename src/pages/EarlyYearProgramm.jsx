import PrimaryButton from "@/components/common/PrimaryButton";
import icons from "@/utils/icons";
import {
  Heart,
  Search,
  Brain,
  MessageCircle,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import images from "@/utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFlip, Autoplay } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { whychoosedata } from "@/utils/menu";
import SecondaryButton from "@/components/common/SecondaryButton";
const EarlyYearProgramm = () => {
  const iconsl = {
    heart: Heart,
    search: Search,
    brain: Brain,
    messageCircle: MessageCircle,
    trendingUp: TrendingUp,
    refreshCw: RefreshCw,
  };
  const [isDeskTop, setIsDeskTop] = useState(false);
  const data = [
    {
      id: 1,
      icn: icons.heart,
      title: "Social-Emotional",
      para: "Building confidence, empathy, and self-regulation",
    },
    {
      id: 2,
      icn: icons.star,
      title: "Creative Expression",
      para: "Art, music, and imaginative play",
    },
    {
      id: 3,
      icn: icons.users,
      title: "Communication",
      para: "Language development and self-expression",
    },
    {
      id: 4,
      icn: icons.global,
      title: "Cultural Awareness",
      para: "Appreciating diversity and global perspectives",
    },
  ];
  const values = [
    { title: "Caring", icon: iconsl.heart },
    { title: "Curious", icon: iconsl.search },
    { title: "Receptive", icon: iconsl.brain },
    { title: "Articulate", icon: iconsl.messageCircle },
    { title: "Risk-takers", icon: iconsl.trendingUp },
    { title: "Reflective", icon: iconsl.refreshCw },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsDeskTop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full">
      {/* //! Hero Section */}
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.early})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl font-bold  md:text-5xl lg:text-7xl text-white font-semibold">
            Early Years Programme
          </h1>
          <p className="text-[12px] md:text-[16px] mt-2 md:mt-4 mb-12 text-white">
            Where curiosity blooms and lifelong learning begins through play,
            exploration, and wonder
          </p>

          <PrimaryButton title={"Schedule a Visit"} link={"/contact"} />
        </div>
      </div>
      {/* //! Hero Section */}

      {/* //? Main Contant */}
      <div className="w-full px-3 md:px-10 flex flex-col lg:flex-row items-center py-[30px] md:py-[60px] justify-center gap-3">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-full lg:w-1/2 flex flex-col gap-3"
        >
          <h1 className="text-2xl md:text-4xl  lg:text-5xl font-bold">
            Learning Through Play
          </h1>
          <p className="text-[12px] sm:text-[14px] lg:text-[15px] tracking-wide">
            At Rimberio, our Early Years Programme is built on the understanding
            that play is the most powerful vehicle for learning in young
            children. Through carefully designed play experiences, children
            develop critical thinking, problem-solving skills, and social
            competence.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[15px] tracking-wide">
            We follow the IB Primary Years Programme framework, adapted for our
            youngest learners, where children are viewed as intelligent,
            resourceful, and creative individuals who learn and grow at their
            own pace.
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[15px] tracking-wide">
            Our educators act as partners and guides, creating joyful and
            meaningful learning environments that nurture the whole child-
            socially, emotionally, physically, and cognitively.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="w-full lg:w-1/2 overflow-hidden h-full"
        >
          <img
            src={images.cambridge}
            className=" w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* //! Well-Rounded Development */}
      <div className="w-full bg-card py-[30px] md:py-[60px]">
        <h1 className="text-[21px] font-semibold md:text-5xl lg:text-6xl text-center">
          Well-Rounded Development
        </h1>
        <p className="text-[13px] md:text-[15px] text-center w-full md:w-[80%] text-muted-foreground lg:w-[50%] mx-auto mt-3">
          We nurture every aspect of your child's growth, ensuring they develop
          into confident, caring, and capable young learners
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-10 gap-4 py-[50px]">
          {data.map((item, index) => {
            const deskTop = index < 2 ? "fade-right" : "fade-left";
            const mobile = index < 2 ? "fade-down" : "fade-up";
            return (
              <div
                key={index}
                data-aos={isDeskTop ? deskTop : mobile}
                className="bg-background dark:hover:bg-black py-8 px-4  rounded-md shadow-lg cursor-pointer hover:bg-secondary transition-all group duration-300 ease-in-out flex items-center gap-3"
              >
                {/* ICON */}
                <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center shrink-0">
                  <item.icn size={22} className="text-white" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col items-start justify-center">
                  <h2 className="text-[16px] md:text-xl font-semibold transition-colors group-hover:text-white">
                    {item.title}
                  </h2>

                  <p className="text-[11px] md:text-[13px] text-muted-foreground group-hover:text-white/80 transition-colors">
                    {item.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* //? Daily Life */}
      <div className="w-full px-3 md:px-10 flex flex-col-reverse lg:flex-row items-center py-[30px] md:py-[60px] justify-center gap-5">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className="w-full lg:w-1/2 overflow-hidden h-full"
        >
          <img
            src={images.study}
            className=" w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 p-4">
          <h1
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-2xl md:text-4xl  lg:text-5xl font-bold"
          >
            A Day in Early Years
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-[12px] sm:text-[14px] text-muted-foreground lg:text-[15px] tracking-wide"
          >
            Each day in our Early Years Programme is thoughtfully designed to
            balance structured learning with child-led exploration. Children
            engage in:
          </p>
          <div className="flex flex-col gap-5">
            {[
              "Sensory exploration and discovery",
              "Dramatic play and storytelling",
              "Music, movement, and creative arts",
              "Outdoor learning and nature exploration",
              "Building and construction play",
              "Early literacy through songs and stories",
            ].map((item, index) => (
              <p
                data-aos="fade-right"
                data-aos-delay={index * 150}
                key={index}
                className="flex items-center gap-2"
              >
                <icons.arrow size={17} className="text-secondary" />
                <span className="text-[14px] font-light tracking-wide">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* //! Growing IB Learners */}
      <div className="w-full px-3 md:px-10 flex flex-col-reverse md:flex-row items-center py-[30px] md:py-[80px] justify-center gap-5">
        <div className="w-full md:w-1/2 flex flex-col gap-3 p-4">
          <h1 className="text-[17px] md:text-3xl lg:text-5xl font-bold">
            Growing IB Learners
          </h1>
          <p className="text-[13px] text-muted-foreground mt-5">
            Even at this young age, we introduce the IB Learner Profile
            attributes in developmentally appropriate ways. Through play and
            daily interactions, children begin to understand
          </p>
          <div className="w-[50%] mt-4">
            <PrimaryButton title={"Schedule a Visit"} link={"/contact"} />
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            flipEffect={{
              slideShadows: false,
            }}
            modules={[EffectFlip, Autoplay]}
            className="w-full mySwiper lg:w-1/3 overflow-hidden h-full shadow-lg p-9"
          >
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-2 w-full h-full">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 p-1 rounded-md bg-background transition-all duration-300  cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                      <item.icon size={18} className="text-white" />
                    </div>

                    <p className="text-[12px]  font-medium text-center">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={images.ibimage} className=" rounded-md" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* //? Why Choose EY */}
      <div className="w-full px-3 md:px-10 py-[30px] md:py-[60px]">
        <h1
          data-aos="zoom-in"
          data-aos-delY="100"
          className="text-lg md:text-3xl pb-4 lg:text-4xl text-secondary font-semibold text-center"
        >
          Why Choose Our Early Years Programme?
        </h1>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5">
          {whychoosedata.map((item) => (
            <div
              data-aos="zoom-in"
              data-aos-delY={item.id * 100}
              key={item.id}
              className="bg-background w-full shadow rounded cursor-pointer  p-4 border border-zinc-300 "
            >
              <img
                src={item.img}
                className="w-full h-48 md:h-52 lg:h-56 object-cover rounded-md"
              />

              <h3 className="text-[15px] md:text-lg lg:text-2xl py-2">
                {item.title}
              </h3>

              <p className="text-[14px] text-muted-foreground flex-grow">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* //! Give your child best */}
      <div
        className="w-full relative px-2 lg:px-10 h-82 bg-no-repeat bg-center bg-cover bg-fixed flex items-center justify-center"
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
            Give Your Child the Best Start
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="lg:w-[70%] w-full md:text-[17px] text-[14px] leading-5 lg:leading-[30px] text-muted"
          >
            Join us for a campus tour and see how our Early Years Programme
            creates a foundation for lifelong learning, confidence, and joy.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="flex w-full items-center justify-center md:flex-row flex-col gap-3 mt-7"
          >
            <SecondaryButton
              title={"Schedule a Campus Visit"}
              link={"/contact"}
              className={"w-[70%] md:w-auto"}
            />
            <PrimaryButton
              title={"Explore Primary Years"}
              link={"/primary-years"}
              className={"w-[70%] md:w-auto"}
            />
          </div>
        </div>
        {/* //?Content */}
      </div>
    </div>
  );
};

export default EarlyYearProgramm;
