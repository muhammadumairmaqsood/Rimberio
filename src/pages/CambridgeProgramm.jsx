import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import icons from "@/utils/icons";
import images from "@/utils/images";
const CambridgeProgramm = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.cambridge})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl font-bold w-[95%] lg:w-[80%] mx-auto  md:text-5xl lg:text-7xl text-white font-semibold">
            Cambridge Primary Programme
          </h1>
          <p className="text-[12px] w-[90%] lg:w-[60%] mx-auto md:text-[16px] mt-2 md:mt-4 mb-12 text-white">
            Rimberio International also offers the Cambridge Curriculum,
            expanding our global education pathways and offering families
            greater choice from the early years.
          </p>

          <div className="flex gap-4 items-center justify-center">
            <PrimaryButton title={"Contact Admissions"} link={"/contact"} />
            <SecondaryButton title={"View Admissions"} link={"/admissions"} />
          </div>
        </div>
      </div>
      {/* //?Why Cambridge */}
      <div className="w-full py-[30px] md:py-[60px] bg-[#F4F1F8] dark:bg-black ">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-xl md:text-2xl lg:text-4xl font-semibold text-center"
        >
          Why Cambridge at Think and Grow International?
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-[12px] sm:text-[14px] lg:text-[15px] text-muted-foreground mt-6 w-[88%] md:w-[80%] lg:w-[60%] mx-auto tracking-wide"
        >
          Starting with Kindergarten (Age 4.5), Grade 1 (Age 5.5+) and Grade 2
          (Age 6.5+), our Cambridge stream is carefully designed to provide a
          strong academic foundation, promote skill-based learning, and align
          with international benchmarks — all while staying true to our core
          values of diligence, integrity, and excellence.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[12px] sm:text-[14px] lg:text-[15px] text-muted-foreground mt-6 w-[88%] md:w-[80%] lg:w-[60%] mx-auto tracking-wide"
        >
          The Cambridge Curriculum is one of the world’s most respected
          international education systems, known for its clarity, academic
          depth, and structured progression.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[12px] sm:text-[14px] lg:text-[15px] text-muted-foreground mt-6 w-[88%] md:w-[80%] lg:w-[60%] mx-auto tracking-wide"
        >
          At Rimberio International, we combine Cambridge’s academic strength
          with our nurturing environment, modern campus, and focus on the whole
          child.
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[12px] sm:text-[14px] lg:text-[15px]  mt-6 w-[88%] md:w-[80%] lg:w-[60%] mx-auto tracking-wide font-semibold"
        >
          Key benefits include:
        </p>
        <div className="w-[88%] md:w-[80%] lg:w-[60%] mx-auto">
          <div className="flex flex-col pl-1 md:pl-6 gap-6 mt-2 md:mt-8">
            {[
              "Strong foundation in English, Mathematics, and Science",
              "Clear learning objectives with measurable outcomes",
              "Focus on critical thinking, problem-solving, and communication",
              "Internationally benchmarked curriculum",
              "Smooth progression to Cambridge IGCSE in later years",
            ].map((item, index) => (
              <p
                data-aos="fade-right"
                data-aos-delay={index * 150}
                key={index}
                className="flex items-center gap-2"
              >
                <icons.hand size={17} className="text-secondary" />
                <span className="text-[15px] font-light tracking-wide">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* //?Why Cambridge */}
      {/* //!Next Section */}
      <div className="w-full px-4 md:px-10 flex pt-[10px] lg:pt-[70px] bg-background mt-5 pb-[30px] items-stretch justify-center gap-5 lg:gap-12 flex-col-reverse lg:flex-row">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="w-full lg:w-1/2"
        >
          <h1 className="text-[15px] md:text-2xl lg:text-3xl font-semibold mt-4">
            Junior School – Cambridge Primary (Kindergarten - Grade 2)
          </h1>
          <p className="text-[14px] text-muted-foreground mt-3">
            Building strong foundations through Kindergarten - Stage 2
          </p>
          <div className="grid grid-cols-1  md:grid-cols-2 py-[30px] w-full gap-4">
            <div className="bg-card shadow-md overflow-hidden transition-all duration-500 ease-in-out max-h-26 hover:max-h-56 cursor-pointer group rounded p-4">
              <button className="px-6 py-2 bg-secondary text-white font-medium rounded-md">
                Cambridge Primary
              </button>
              <h3 className="mt-3 text-xl font-medium">
                Kindergarten (Age 4.5)
              </h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h4 className="text-[14px] font-medium">
                  Early Years Foundation Year
                </h4>
                <p className="text-[14px] text-muted-foreground mt-1">
                  Strong focus on developing literacy and numeracy skills
                  through play-based learning
                </p>
              </div>
            </div>
            <div className="bg-card shadow-md overflow-hidden transition-all duration-500 ease-in-out max-h-26 hover:max-h-56 cursor-pointer group rounded p-4">
              <button className="px-6 py-2 bg-secondary text-white font-medium rounded-md">
                Cambridge Primary
              </button>
              <h3 className="mt-3 text-xl font-medium">Grade 1 (Age 5.5+)</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h4 className="text-[14px] font-medium">
                  Cambridge Primary Stage 1
                </h4>
                <p className="text-[14px] text-muted-foreground mt-1">
                  Focuses on structured English, Math & Science foundational
                  skills.
                </p>
              </div>
            </div>
            <div className="bg-card shadow-md overflow-hidden transition-all duration-500 ease-in-out max-h-26 hover:max-h-56 cursor-pointer group rounded p-4">
              <button className="px-6 py-2 bg-secondary text-white font-medium rounded-md">
                Cambridge Primary
              </button>
              <h3 className="mt-3 text-xl font-medium">Grade 1 (Age 5.5+)</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h4 className="text-[14px] font-medium">
                  Cambridge Primary Stage 1
                </h4>
                <p className="text-[14px] text-muted-foreground mt-1">
                  Focuses on structured English, Math & Science foundational
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-full lg:w-1/2"
        >
          <img
            src={images.ourp3}
            className="w-full object-cover rounded-md h-full"
          />
        </div>
      </div>
      {/* //!Next Section */}
      {/* //? Next Section */}
      <div className="w-full px-4 md:px-10 flex pt-[10px] lg:pt-[70px] bg-background mt-5 pb-[30px] items-stretch justify-center gap-5 lg:gap-8 flex-col lg:flex-row">
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-full lg:w-1/2"
        >
          <img
            src={images.ourp3}
            className="w-full object-cover rounded-md h-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-[20px] text-center md:text-2xl lg:text-3xl font-semibold mt-4"
          >
            Academic & Skills Focus
          </h1>
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className=" py-[30px] !h-[100px] mt-5 !w-[80%] mx-auto gap-4 mySwiper"
          >
            <SwiperSlide className=" border border-gray-200 rounded-md w-full  p-4">
              <div>
                <h4 className="text-[17px] md:text-[22px] font-semibold">
                  Early Years Foundation Year
                </h4>
                <p className="text-[14px] md:text-[16px]  text-muted-foreground mt-2">
                  Strong focus on core academic subjects.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" border border-gray-200 rounded-md w-full  p-4">
              <div>
                <h4 className="text-[17px] md:text-[22px] text-muted-foreground font-semibold">
                  Reading fluency and writing skills
                </h4>
                <p className="text-[14px] md:text-[16px]  mt-2">
                  Developing essential communication abilities.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" border border-gray-200 rounded-md w-full  p-4">
              <div>
                <h4 className="text-[17px] md:text-[22px] font-semibold">
                  Logical thinking and problem-solving
                </h4>
                <p className="text-[14px] md:text-[16px] text-muted-foreground  mt-2">
                  Encouraging analytical minds.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" border border-gray-200 rounded-md w-full  p-4">
              <div>
                <h4 className="text-[17px] md:text-[22px] font-semibold">
                  Confidence and independence
                </h4>
                <p className="text-[14px] md:text-[16px] text-muted-foreground mt-2">
                  Nurturing self-assured learners.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="ml-20">
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-[15px]  text-primary md:text-2xl lg:text-3xl font-semibold mt-4"
            >
              Balanced Learning
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-center my-3 flex items-center justify-start gap-2"
            >
              <icons.hand size={23} className="text-secondary" />
              <span className="text-[14px]">
                Engaging co-curricular activities
              </span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-center flex items-center justify-start gap-2"
            >
              <icons.hand size={23} className="text-secondary" />
              <span className="text-[14px]">
                Active participation in sports
              </span>
            </p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="800"
            className="mt-5 text-[13px] text-muted-foreground ml-20"
          >
            At Rimberio International, we foster not only academic achievement
            but also physical, creative, and social growth — helping children
            become confident, capable, and well-rounded learners.
          </p>
        </div>
      </div>
      {/* //? Next Section */}
      {/* //!Next Section */}
      <div className="w-full flex items-stretch flex-col md:flex-row px-10 justify-center gap-4 bg-card py-[50px]">
        <div className="w-full md:w-1/2">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-[20px] text-center md:text-2xl lg:text-3xl font-semibold my-4"
          >
            Our Teaching Approach
          </h1>
          <p className="text-[14px] text-muted-foreground mb-4">
            At Rimberio International, Cambridge education goes beyond
            textbooks.
          </p>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="myCustomerSwiper"
          >
            <SwiperSlide>
              <p className="text-[25px] font-semibold pt-[30px] text-center px-10">
                Activity-based and inquiry-led learning
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[25px] font-semibold pt-[30px] text-center px-10">
                Small class sizes for individual attention
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[25px] font-semibold pt-[30px] text-center px-10">
                Continuous assessments aligned with Cambridge standards
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[25px] font-semibold pt-[30px] text-center px-10">
                Integration of sports, arts, and life skills
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[25px] font-semibold pt-[30px] text-center px-10">
                Emphasis on confidence, independence, and curiosity
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-1/2">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-[20px] md:text-2xl lg:text-3xl font-semibold my-4"
          >
            A Global Start, A Confident Future
          </h1>
          <p className="text-[14px] text-muted-foreground mb-4">
            By introducing Cambridge at the primary level, we aim to:
          </p>
          <div className="flex flex-col gap-8 mt-10">
            {[
              "Build strong academic fundamentals early",
              "Prepare students for international qualifications",
              "Offer flexibility and choice to families",
              "Maintain global standards with local understanding",
            ].map((item, i) => (
              <p
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="text-center flex items-center justify-start gap-2"
              >
                <icons.hand size={23} className="text-secondary" />
                <span className="text-[14px]">{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* //!Next Section */}
      {/* //? Next Section */}
      <div
        className="w-full relative px-10 h-110 bg-no-repeat bg-center bg-cover bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${images.bgfix})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent"></div>
        {/* //?Content */}
        <div className="relative h-full flex flex-col  items-center justify-center gap-4 text-white">
          <h1
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-xl lg:text-4xl md:text-3xl font-bold"
          >
            Admissions Open – Kindergarten - Grade 2
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:text-[15px] text-[13px] text-muted"
          >
            Admissions are now open for Kindergarten (Age 4.5), Grade 1 (Age
            5.5+) and Grade 2 (Age 6.5+).
          </p>
          <p
            data-aos="zoom-in"
            data-aos-delay="300"
            className="md:text-[15px] text-[13px] text-muted w-full md:w-[90%] lg:w-[60%] mx-auto"
          >
            Students enrolled in these grades will progress seamlessly through
            the Cambridge pathway, advancing to the next levels as they grow in
            age and learning, ultimately leading to the Cambridge IGCSE. Our
            programme ensures a smooth and continuous transition, maintaining
            academic excellence and well-rounded development at every stage.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex flex-col md:flex-row items-center gap-3 mt-7"
          >
            <PrimaryButton title={"Contact Admissions"} link={"/contact"} />
            <SecondaryButton
              title={"View Admissions Process"}
              link={"/admissions"}
            />
          </div>
        </div>
        {/* //?Content */}
      </div>
      {/* //? Next Section */}
    </div>
  );
};

export default CambridgeProgramm;
