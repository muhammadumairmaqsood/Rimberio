import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import icons from "@/utils/icons";
import images from "@/utils/images";
import { data } from "@/utils/menu";
import React from "react";
const AboutUs = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.ourp3})` }}
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
            Our Story
          </button>
          <h1 className="text-2xl font-bold   md:text-5xl lg:text-7xl text-white font-semibold">
            Rimbero International School
          </h1>
          <p className="text-[12px] w-[90%] lg:w-[80%] mx-auto md:text-[18px] mt-2 md:mt-4 mb-12 text-white">
            Rigorous, ethical, future-focused education- built on character,
            crafted with care.
          </p>
        </div>
      </div>
      {/* //? Our Values */}
      <div className="w-full flex items-center flex-col gap-5 lg:gap-10 lg:flex-row justify-center py-[50px] px-2 md:px-10 bg-background">
        <div
          className="w-full lg:flex-1"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="text-2xl font-bold   md:text-3xl lg:text-4xl font-semibold">
            Intention, Values, and a Global Outlook
          </h1>
          <p className="text-[12px]  md:text-[14px] text-muted-foreground mt-2">
            At Rimberio International (RBI), our journey is guided by a clear
            purpose and a strong moral compass. Rooted in the values of
            <span className="text-secondary px-1 font-semibold">Diligence</span>
            ,{" "}
            <span className="text-secondary px-1 font-semibold">Integrity</span>
            , and{" "}
            <span className="text-secondary px-1 font-semibold">
              Excellence
            </span>
            , we are committed to providing an education that is rigorous,
            ethical, and future-focused.
          </p>
          <p className="flex items-start justify-center gap-3 mt-4">
            <span>
              <icons.hand size={23} className="text-secondary" />
            </span>
            <span className="text-[12px]  md:text-[15px]  mt-2 italic">
              Inspired by the precision, quality, and finesse associated with
              Swiss educational traditions, we craft learning with care and
              intention- because true excellence lies in consistency, depth, and
              character.
            </span>
          </p>
          <p className="text-[12px]  md:text-[14px] text-muted-foreground mt-2">
            Every aspect of our system- from curriculum design to classroom
            practice- reflects our belief that students thrive when high
            expectations meet strong values, supportive relationships, and
            expert teaching.
          </p>
        </div>
        <div
          className="w-full lg:w-1/4 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="border border-gray-200 rounded-md p-5 w-full hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Diligence
            </h1>
            <p className="text-[11px] md:text-[13px] lg:text-[14px] text-muted-foreground">
              Consistent effort, discipline, and a growth mindset.
            </p>
          </div>
          <div className="border border-gray-200 rounded-md p-5 w-full hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Integrity
            </h1>
            <p className="text-[13px]  lg:text-[14px] text-muted-foreground">
              Honesty, responsibility, and ethical decision-making.
            </p>
          </div>
          <div className="border border-gray-200 rounded-md p-5 w-full hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Excellence
            </h1>
            <p className="text-[13px]  lg:text-[14px] text-muted-foreground">
              High standards in learning, character, and conduct.
            </p>
          </div>
        </div>
      </div>
      {/* //? Our Values */}
      {/* //! Academics */}
      <div className="w-full  py-[50px] px-2 md:px-10 bg-[#F9F6F1] dark:bg-zinc-900">
        <h2 className="text-[14px] text-secondary dark:text-white md:text-lg lg:text-[17px] font-semibold uppercase text-center">
          Academics
        </h2>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[18px] text-primary mt-5 dark:text-white md:text-3xl lg:text-5xl font-semibold text-center"
        >
          A Commitment to Academic Excellence
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-[13px] md:text-[15px] lg:text-[16px] text-muted-foreground w-[95%] mx-auto mt-4 md:w-[80%] lg:w-[60%] text-center"
        >
          As a school offering both the Cambridge International Programme and
          the International Baccalaureate (IB), we provide globally respected
          pathways that prepare students for future academic success.
        </p>
        <div className="w-full lg:w-[90%] mx-auto mt-5 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer bg-white dark:bg-zinc-800 p-5">
            <h2 className="text-[15px] font-semibold md:text-xl lg:text-2xl">
              Cambridge International Programme
            </h2>
            <div className="flex items-start gap-5 py-[20px] justify-center flex-col">
              {[
                "Structured, concept-based learning",
                "Strong academic foundations",
                "Understanding over memorisation",
                "Clear progression and mastery",
              ].map((item, i) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={i * 200}
                  key={i}
                  className="flex items-center justify-start gap-2"
                >
                  <icons.arrow size={18} className="text-secondary" />
                  <p className="text-[12px] md:text-[14px] text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer bg-white dark:bg-zinc-800 p-5">
            <h2 className="text-[15px] font-semibold md:text-xl lg:text-2xl">
              International Baccalaureate (IB)
            </h2>
            <div className="flex items-start gap-5 py-[20px] justify-center flex-col">
              {[
                "Inquiry-driven and interdisciplinary learning",
                "Critical thinking and global awareness",
                "Intellectual curiosity and reflection",
                "Learner profile and agency",
              ].map((item, i) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={i * 250}
                  key={i}
                  className="flex items-center justify-start gap-2"
                >
                  <icons.arrow size={18} className="text-secondary" />
                  <p className="text-[12px] md:text-[14px] text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* //! Academics */}
      {/* //? Educators */}
      <div className="w-full  py-[50px] px-2 md:px-10 bg-background">
        <h2 className="text-[14px] text-secondary md:text-lg dark:text-white lg:text-[17px] font-semibold uppercase text-center">
          Educators
        </h2>
        <div className="w-full md:w-[80%] lg:w-[70%] mx-auto mt-4">
          <h1 className="text-[17px] md:text-2xl lg:text-4xl  text-center font-semibold">
            Completeness Through Expert Educators
          </h1>
          <p className="text-[12px] md:text-[13px] lg:text-[15px] mt-5 text-center text-muted-foreground">
            At Rimberio International, teaching excellence is non-negotiable.
            All our homeroom teachers are IB-trained, bringing depth,
            consistency, and international best practices into every classroom-
            across both IB and Cambridge streams.
          </p>
          <p className="text-[12px] md:text-[13px] lg:text-[15px] mt-5 text-center text-muted-foreground">
            This unified teaching philosophy ensures that students experience a
            coherent, child-centred learning journey, regardless of the
            programme they are enrolled in. Our educators focus not only on
            academic outcomes but also on nurturing independence, confidence,
            and a lifelong love for learning.
          </p>
        </div>
        <div className="w-[90%] mt-2 lg:mt-5 mx-auto p-5 md:w-[80%] lg:w-[50%] border border-r-gray-200 rounded-md hover:shadow cursor-pointer">
          <h3 className="text-[14px] md:text-[22px] text-red-800 dark:text-white font-semibold">
            What sets our team apart
          </h3>
          <div className="flex flex-col items-start justify-center gap-2">
            {[
              "IB trained leadership with international school experience",
              "All teachers are IB trained - CAT1, CAT2, CAT3",
              "Sports coaches are IB trained, delivering skill-based physical activities through inquiry",
            ].map((item, i) => (
              <div
                key={i}
                className="flex  items-center justify-start gap-5 py-[5px] "
              >
                <div
                  data-aos="fade-right"
                  data-aos-dela="500"
                  className="w-8 h-8 dark:bg-zinc-500 rounded-full text-white text-lg font-bold flex items-center shrink-0 justify-center bg-secondary"
                >
                  {i + 1}
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-dela="600"
                  className="text-[13px] md:text-[14px] lg:text-[15px] text-muted-foreground"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //? Educators */}
      {/* //! Stem */}
      <div className="w-full  py-[50px] px-2 md:px-10 bg-card">
        <h2 className="text-[14px] text-secondary md:text-lg dark:text-white lg:text-[17px] font-semibold uppercase text-center">
          Stem
        </h2>
        <h4 className="text-[17px] md:text-2xl lg:text-4xl font-semibold text-center">
          STEM-Focused, Future-Ready Learning
        </h4>
        <p className="text-[13px] md:text-[15px] text-muted-foreground px-3 md:px-20 lg:px-70 mt-3 text-center">
          As an IB STEM-focused school and a Cambridge school, we place strong
          emphasis on science, technology, engineering, and mathematics-
          integrated meaningfully with language, humanities, arts, and physical
          development.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="700"
          className="w-[90%] py-[30px] lg:py-[80px] mx-auto md:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="bg-white rounded-md dark:bg-zinc-600 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 group overflow-hidden">
            <img
              src={images.science}
              className="w-full h-[170px] object-cover group-hover:scale-105 transition-all transform duration-300 ease-in-out rounded-tl-md rounded-tr-md"
            />
            <h4 className="text-[18px] px-3 md:text-lg lg:text-xl font-semibold mt-2">
              Science
            </h4>
            <p className="text-[13px] md:text-[15px] text-muted-foreground px-3 pb-5">
              Experimentation, observation, and scientific reasoning.
            </p>
          </div>
          <div className="bg-white rounded-md dark:bg-zinc-600 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 group overflow-hidden">
            <img
              src={images.technology}
              className="w-full object-cover h-[170px] group-hover:scale-105 transition-all transform duration-300 ease-in-out rounded-tl-md rounded-tr-md"
            />
            <h4 className="text-[18px] px-3 md:text-lg lg:text-xl font-semibold mt-2">
              Technology
            </h4>
            <p className="text-[13px] md:text-[15px] text-muted-foreground px-3 pb-5">
              Digital literacy, computing, and applied problem-solving.
            </p>
          </div>
          <div className="bg-white rounded-md dark:bg-zinc-600 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 group overflow-hidden">
            <img
              src={images.engineering}
              className="w-full h-[170px] object-cover group-hover:scale-105 transition-all transform duration-300 ease-in-out rounded-tl-md rounded-tr-md"
            />
            <h4 className="text-[18px] px-3 md:text-lg lg:text-xl font-semibold mt-2">
              Engineering
            </h4>
            <p className="text-[13px] md:text-[15px] text-muted-foreground px-3 pb-5">
              Design thinking, building, and iteration.
            </p>
          </div>
          <div className="bg-white rounded-md dark:bg-zinc-600 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 group overflow-hidden">
            <img
              src={images.math}
              className="w-full h-[170px] object-cover group-hover:scale-105 transition-all transform duration-300 ease-in-out rounded-tl-md rounded-tr-md"
            />
            <h4 className="text-[18px] px-3 md:text-lg lg:text-xl font-semibold mt-2">
              Mathematics
            </h4>
            <p className="text-[13px] md:text-[15px] text-muted-foreground px-3 pb-5">
              Numeracy, logic, patterns, and analytical thinking.
            </p>
          </div>
        </div>
      </div>
      {/* //! Stem */}
      {/* //? Sustainability */}
      <div className="w-full  py-[50px] px-2 md:px-10 bg-background">
        <h2 className="text-[14px] text-secondary md:text-lg dark:text-white lg:text-[17px] font-semibold uppercase text-center">
          Sustainability
        </h2>
        <h4
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="800"
          className="text-[17px] md:text-2xl lg:text-4xl font-semibold text-center"
        >
          Our Commitment to Sustainability
        </h4>
        <p
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="900"
          className="text-[13px] md:text-[15px] text-muted-foreground px-3 md:px-20 lg:px-70 mt-3 text-center"
        >
          Sustainability is not an initiative at Rimberio — it is a principle
          that guides our decisions and defines our campus culture.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="900"
          className="shadow border border-gray-200 rounded-md p-5 w-[98%] mx-auto md:w-[80%] mt-8"
        >
          <p className="text-[13px] md:text-[15px] text-muted-foreground">
            Over the past few years, our leadership has contributed to
            large-scale afforestation efforts, planting over{" "}
            <span className="text-secondary font-semibold">
              one million trees
            </span>{" "}
            as part of a broader commitment to environmental renewal. On our own
            campus, we have created a thriving micro forest — a living ecosystem
            that breathes life into our surroundings and serves as a daily
            reminder that growth must be nurtured with care.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[95%] mx-auto md:w-[80%] my-[30px]"
        >
          <div className="relative w-full h-[200px] bg-black overflow-hidden rounded-md">
            <svg className="absolute w-full h-full">
              {[...Array(20)].map((_, i) => (
                <polygon
                  key={i}
                  points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                  fill="white"
                  transform={`translate(${Math.random() * 300}, ${Math.random() * 300}) scale(0.5)`}
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.2;1"
                    dur={`${1 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
              ))}
            </svg>
            <div className="relative z-10 text-white  text-center flex flex-col items-center justify-center pt-10">
              <h2 className="text-[14px] md:text-2xl">Afforestation</h2>
              <p className="text-[13px] md:text-[14px] p-3">
                Over one million trees planted as part of a large-scale
                leadership commitment to environmental renewal.
              </p>
            </div>
          </div>
          <div className="relative w-full h-[200px] bg-black overflow-hidden rounded-md">
            <svg className="absolute w-full h-full">
              {[...Array(20)].map((_, i) => (
                <polygon
                  key={i}
                  points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                  fill="white"
                  transform={`translate(${Math.random() * 300}, ${Math.random() * 300}) scale(0.5)`}
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.2;1"
                    dur={`${1 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
              ))}
            </svg>
            <div className="relative z-10 text-white  text-center flex flex-col items-center justify-center pt-10">
              <h2 className="text-[14px] md:text-2xl">Self-Sufficiency</h2>
              <p className="text-[13px] md:text-[14px] p-3">
                Feed for our horses is grown on our own land, reinforcing
                responsible resource management and respect for agriculture.
              </p>
            </div>
          </div>
          <div className="relative w-full h-[200px] bg-black overflow-hidden rounded-md">
            <svg className="absolute w-full h-full">
              {[...Array(20)].map((_, i) => (
                <polygon
                  key={i}
                  points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                  fill="white"
                  transform={`translate(${Math.random() * 300}, ${Math.random() * 300}) scale(0.5)`}
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.2;1"
                    dur={`${1 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </polygon>
              ))}
            </svg>
            <div className="relative z-10 text-white  text-center flex flex-col items-center justify-center pt-10">
              <h2 className="text-[14px] md:text-2xl">Solar Energy</h2>
              <p className="text-[13px] md:text-[14px] p-3">
                Solar panels power key areas of our campus, reducing our
                footprint and modelling renewable energy practices for students.
              </p>
            </div>
          </div>
        </div>
        <h5 className="flex w-[90%] mx-auto md:w-[80%] lg:w-[70%] items-start justify-start gap-2">
          <icons.hand size={22} className="text-secondary" />
          <p className="text-[13px] md:text-[14px] text-muted-foreground">
            These efforts are not symbolic. They are intentional. They ensure
            that every child at Think and Grow learns that{" "}
            <span className="text-secondary font-semibold">
              excellence and responsibility must go hand in hand.
            </span>
          </p>
        </h5>
      </div>
      {/* //? Sustainability */}
      {/* //! Campus */}
      <div className="w-full  py-[50px] px-2 md:px-10 bg-card">
        <h2 className="text-[14px] text-secondary md:text-lg dark:text-white lg:text-[17px] font-semibold uppercase text-center">
          Campus
        </h2>
        <h4
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1100"
          className="text-[17px] md:text-2xl lg:text-4xl font-semibold text-center"
        >
          Campus & Facilities
        </h4>
        <p
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1200"
          className="text-[13px] md:text-[15px] text-muted-foreground px-3 md:px-20 lg:px-70 mt-3 text-center"
        >
          Learning is strengthened by space, design, and opportunity. Our campus
          is built to support academic rigour, creativity, wellbeing, and
          future-ready skills.
        </p>
        <div className="my-[30px] grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            "Swimming Pool",
            "Science Lab",
            "IT Lab",
            "Robotics Lab",
            "Outdoor Riding Arena",
            "Arts Room",
          ].map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay="1300"
              key={i}
              className=" h-15 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center"
            >
              <p className=" text-center text-xl text-secondary dark:text-white font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* //! Campus */}
      {/* //? Programm at a glance */}
      <div className="py-[30px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center dark:text-white text-red-500 font-semibold py-[20px]">
          Programmes at a glance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl dark:bg-zinc-700 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-red-600 mb-4 dark:text-white">
                {item.title}
              </h2>

              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-600 dark:text-white"
                  >
                    <span className="w-2 h-2 mt-2 dark:bg-zinc-500 bg-red-500 rounded-full shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* //? Programm at a glance */}
    </div>
  );
};

export default AboutUs;
