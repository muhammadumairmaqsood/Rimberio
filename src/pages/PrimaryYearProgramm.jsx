import PrimaryButton from "@/components/common/PrimaryButton";
import icons from "@/utils/icons";
import images from "@/utils/images";
import "swiper/css";
import { Link } from "react-router-dom";
const PrimaryYearProgramm = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.primary})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl font-bold  md:text-5xl lg:text-7xl text-white font-semibold">
            Primary Years Programme
          </h1>
          <p className="text-[12px] md:text-[16px] mt-2 md:mt-4 mb-12 text-white">
            Empowering young learners to become confident, independent thinkers
            and global citizens
          </p>

          <PrimaryButton title={"Enroll Your Child"} link={"/contact"} />
        </div>
      </div>
      {/* //?Second Section Iquiry and Mission */}
      <div className="w-full px-4 md:px-10 flex pt-[10px] lg:pt-[70px] bg-card mt-5 pb-[30px] items-stretch justify-center gap-5 lg:gap-10 flex-col lg:flex-row">
        {/* LEFT */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="lg:w-1/2 w-full flex flex-col"
        >
          <img
            src={images.inquiry}
            className="w-full h-[250px] object-cover rounded-md"
          />

          <h1 className="text-[15px] md:text-3xl lg:text-4xl font-semibold mt-4">
            Inquiry Based Learning
          </h1>

          <p className="text-[14px] text-muted-foreground mt-3">
            The inquiry-based learning approach encompasses several
            student-centered methodologies, including Problem-Based Learning
            (PBL), Project-Based Learning, and Design-Based Learning, all of
            which encourage critical thinking, creativity, and active
            exploration.
          </p>
        </div>

        {/* RIGHT */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:w-1/2 w-full flex flex-col"
        >
          <img
            src={images.ibmission}
            className="w-full h-[250px] object-cover rounded-md"
          />

          <h1 className="text-[15px] md:text-3xl lg:text-4xl font-semibold mt-4">
            The IB Mission
          </h1>

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <p className="text-[14px] text-muted-foreground mt-3">
                The International Baccalaureate aims to develop inquiring,
                knowledgeable and caring young people who help to create a
                better and more peaceful world through intercultural
                understanding and respect.
              </p>

              <p className="text-[14px] text-muted-foreground mt-3">
                To this end, the organization works with schools, governments
                and international organizations to develop challenging
                programmes of international education and rigorous assessment.
                These programmes encourage students across the world to become
                active, compassionate and lifelong learners who understand that
                other people, with their differences, can also be right.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //?Second Section Iquiry and Mission */}
      {/* //! Primary Years Programm */}
      <div className="w-full px-4 md:px-10 flex pt-[10px] lg:pt-[70px] bg-background mt-5 pb-[30px] items-stretch justify-center gap-5 lg:gap-10 flex-col-reverse lg:flex-row">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="lg:w-1/2 w-full flex flex-col"
        >
          <h1 className="text-[15px] md:text-3xl lg:text-4xl font-semibold mt-4">
            Primary Years Programme
          </h1>

          <p className="text-[14px] text-muted-foreground mt-3">
            The Primary years' curriculum framework is based on the idea that
            students are agents of their own learning. The philosophy is to
            nurture and develop young students as caring, responsible and active
            participants in a lifelong learning journey.
          </p>
          <p className="text-[14px] text-muted-foreground mt-5">
            Inspired by the works of Goleman, Social Emotional Intelligence is
            at the core of our Philosophy. Think and Grow embodies the IB
            philosophy to foster student growth in all areas so they may become
            happy, well-adjusted individuals.
          </p>
          <p className="text-[14px] text-muted-foreground mt-5">
            With the preparation they receive in the early and PYP, we know that
            students are then ready to become the next architects of the
            emerging world.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:w-1/2 w-full flex flex-col"
        >
          <img
            src={images.experienced}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* //! Primary Years Programm */}
      {/* //? Next Section */}
      <div className="w-full px-4 md:px-10 flex pt-[10px] lg:pt-[70px] bg-[#F1F5F9] dark:bg-black mt-5 pb-[30px] items-stretch justify-center gap-5 lg:gap-10 flex-col-reverse lg:flex-row">
        {/* LEFT */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="w-full lg:w-1/2 flex flex-col min-w-0"
        >
          <h1 className="text-[15px] md:text-3xl lg:text-4xl font-semibold mt-4">
            What Makes the PYP Unique?
          </h1>

          <p className="text-[14px] text-muted-foreground mt-3">
            The IB PYP is more than just academics – it is a student-centered,
            inquiry-based curriculum where children learn by exploring
            real-world questions. Through this approach, students:
          </p>

          <div className="mt-5 flex grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="shadow-md rounded-md p-5 flex flex-col items-center gap-3 bg-white dark:bg-zinc-800">
              <div className="w-12 h-12 rounded-md dark:bg-zinc-800 bg-gray-300 flex items-center justify-center">
                <icons.blub
                  size={26}
                  className="text-secondary dark:text-white"
                />
              </div>
              <p className="text-[15px] text-center text-muted-foreground">
                Develop problem-solving and research skills
              </p>
            </div>

            <div className="shadow-md rounded-md p-5 flex flex-col items-center gap-3  bg-white dark:bg-zinc-800">
              <div className="w-12 h-12 rounded-md dark:bg-zinc-800 bg-gray-300 flex items-center justify-center">
                <icons.global
                  size={26}
                  className="text-secondary dark:text-white"
                />
              </div>
              <p className="text-[15px] text-center text-muted-foreground">
                Learn to be open-minded, caring, and globally aware
              </p>
            </div>

            <div className="shadow-md rounded-md p-5 flex flex-col items-center gap-3  bg-white dark:bg-zinc-800">
              <div className="w-12 h-12 rounded-md dark:bg-zinc-800 bg-gray-300 flex items-center justify-center">
                <icons.users
                  size={26}
                  className="text-secondary dark:text-white"
                />
              </div>
              <p className="text-[15px] text-center text-muted-foreground">
                Build confidence as independent learners
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full lg:w-1/2 flex items-center flex-col justify-center"
        >
          <h1 className="text-[15px] md:text-3xl lg:text-4xl font-semibold mt-4">
            Grade Levels in the PYP
          </h1>

          <p className="text-[14px] text-muted-foreground mt-3 text-center">
            Our PYP provides a solid academic and emotional foundation for
            middle school and lifelong learning.
          </p>
          <div className="w-full grid grid-cols-2  gap-4 p-4">
            <div className="bg-white shadow-md flex items-center justify-start p-5 gap-3 dark:bg-zinc-800 rounded-md">
              <div className="w-17 h-17 bg-secondary dark:bg-zinc-900 flex items-center justify-center rounded-full">
                <span className="text-white text-[17px] font-bold">PYP-1</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold ">Grade 1</h3>
                <p className="text-[14px] font-normal">Age 6-7</p>
              </div>
            </div>
            <div className="bg-white flex shadow-md items-center justify-start p-5 gap-3 dark:bg-zinc-800 rounded-md">
              <div className="w-17 h-17 bg-secondary dark:bg-zinc-900 flex items-center justify-center rounded-full">
                <span className="text-white text-[17px] font-bold">PYP-2</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold ">Grade 2</h3>
                <p className="text-[14px] font-normal">Age 7-8</p>
              </div>
            </div>
            <div className="bg-white flex items-center shadow-md justify-start p-5 gap-3 dark:bg-zinc-800 rounded-md">
              <div className="w-17 h-17 bg-secondary dark:bg-zinc-900 flex items-center justify-center rounded-full">
                <span className="text-white text-[17px] font-bold">PYP-3</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold ">Grade 3</h3>
                <p className="text-[14px] font-normal">Age 8-9</p>
              </div>
            </div>
            <div className="bg-white flex items-center shadow-md justify-start p-5 gap-3 dark:bg-zinc-800 rounded-md">
              <div className="w-17 h-17 bg-secondary dark:bg-zinc-900 flex items-center justify-center rounded-full">
                <span className="text-white text-[17px] font-bold">PYP-4</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold ">Grade 4</h3>
                <p className="text-[14px] font-normal">Age 9-10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //? Next Section */}
      {/* //! Next Section */}
      <div className="w-full px-4 md:px-10 pt-[10px] flex flex-col items-center justify-center gap-3 lg:pt-[70px] bg-background mt-5 pb-[30px]">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-2xl md:text-5xl text-center font-semibold mt-4"
        >
          How Children Learn in the IB PYP?
        </h1>
        <Link
          to={
            "https://www.ibo.org/programmes/primary-years-programme/how-the-pyp-works/"
          }
          target="_blank"
          className="text-blue-500 text-center hover:text-blue-700 transition-all duration-300 ease-in-out hover:underline"
        >
          Learn about the PYP framework
        </Link>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="grid grid-cols-1 mt-1 md:mt-4 md:grid-cols-3 gap-4 w-[96%] lg:w-[80%] mx-auto "
        >
          <div className="bg-gray-200 p-5 hover:-translate-y-2 transform transition-all duration-300 ease-in-out cursor-pointer rounded-md flex flex-col gap-2 dark:bg-zinc-800 items-start justify-center">
            <div className="w-11 h-11 rounded-full bg-secondary  flex items-center justify-center">
              <icons.book size={23} className="text-white" />
            </div>
            <h3 className="text-[15px] md:text-md font-semibold">
              Inquiry-Based Learning
            </h3>
            <p className="text-[14px]">
              Students drive their learning through questions, exploration, and
              reflection.
            </p>
          </div>
          <div className="bg-gray-200 p-5 hover:-translate-y-2 transform transition-all duration-300 ease-in-out cursor-pointer rounded-md flex flex-col gap-2 dark:bg-zinc-800 items-start justify-center">
            <div className="w-11 h-11 rounded-full bg-secondary  flex items-center justify-center">
              <icons.global size={23} className="text-white" />
            </div>
            <h3 className="text-[15px] md:text-md font-semibold">
              Transdisciplinary Themes
            </h3>
            <p className="text-[14px]">
              Students drive their learning through questions, exploration, and
              reflection.
            </p>
          </div>
          <div className="bg-gray-200 p-5 hover:-translate-y-2 transform transition-all duration-300 ease-in-out cursor-pointer rounded-md flex flex-col gap-2 dark:bg-zinc-800 items-start justify-center">
            <div className="w-11 h-11 rounded-full bg-secondary  flex items-center justify-center">
              <icons.users size={23} className="text-white" />
            </div>
            <h3 className="text-[15px] md:text-md font-semibold">
              The IB Learner Profile
            </h3>
            <p className="text-[14px]">
              We develop students who are thinkers, communicators, risk-takers,
              and caring global citizens.
            </p>
          </div>
        </div>
      </div>
      {/* //! Next Section */}
      {/* //? Learn byone the classroom */}
      <div className="w-full px-4 md:px-10 pt-[10px] flex flex-col dark:bg-black items-center justify-center gap-3 lg:pt-[70px] bg-[#F1F5F9] mt-5 pb-[30px]">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-2xl md:text-5xl text-center font-semibold mt-4"
        >
          Learning Beyond the Classroom
        </h1>
        <p className="text-[14px] text-muted-foreground mt-3">
          Experience the vibrant learning environment where students explore,
          create, and grow together
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 w-[95%] mx-auto md:w-[90%] lg:w-[85%] md:mt-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-full overflow-hidden cursor-pointer"
          >
            <img
              src={images.study}
              className="rounded-lg w-full object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-full overflow-hidden h-full cursor-pointer"
          >
            <img
              src={images.nurturing}
              className="rounded-lg w-full h-full object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full overflow-hidden h-full cursor-pointer"
          >
            <img
              src={images.smooth}
              className="rounded-lg w-full h-full object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full overflow-hidden rounded-lg h-full cursor-pointer"
          >
            <img
              src={images.taekwondo}
              className="rounded-lg w-full h-full object-cover hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
      {/* //? Learn byone the classroom */}
      {/* //! Next Section */}
      <div className="w-full px-4 md:px-10 pt-[10px] flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:pt-[70px] bg-background mt-5 pb-[30px]">
        <div className="w-[96%] mx-auto lg:w-1/2 border border-gray-300 rounded-md p-3">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-xl md:text-3xl lg:text-4xl text-center font-semibold mt-4"
          >
            The Rimbero Advantage
          </h1>
          <div className="flex flex-col pl-1 md:pl-6 gap-6 mt-2 md:mt-8">
            {[
              "International curriculum with local cultural values",
              "Strong academics in literacy, numeracy, and science",
              "Technology integration with coding, robotics, and digital literacy",
              "Arts, music, and sports for balanced growth",
              "A nurturing community where every child is valued",
            ].map((item, index) => (
              <p
                data-aos="fade-right"
                data-aos-delay={index * 150}
                key={index}
                className="flex items-center gap-2"
              >
                <icons.arrow size={17} className="text-secondary" />
                <span className="text-[15px] font-light tracking-wide">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="w-[96%] mx-auto lg:w-1/2 border border-gray-300 rounded-md p-3">
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-xl md:text-2xl lg:text-3xl text-start font-semibold mt-4"
          >
            Why the IB PYP is Right for Your Child?
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            className="mt-4 pl-1 md:pl-6 text-start font-semibold"
          >
            The IB Primary Years Programme empowers children to:
          </p>
          <div className="flex flex-col pl-1 md:pl-6 gap-6 mt-2 md:mt-8">
            {[
              "Become confident, independent learners",
              "Build strong academic and social foundations",
              "Develop the skills needed to succeed in secondary school and beyond",
            ].map((item, index) => (
              <p
                data-aos="fade-left"
                data-aos-delay={index * 150}
                key={index}
                className="flex items-center gap-2"
              >
                <icons.arrow size={17} className="text-secondary" />
                <span className="text-[15px] font-light tracking-wide">
                  {item}
                </span>
              </p>
            ))}
          </div>
          <PrimaryButton
            title={"Schedule a Campus Visit"}
            link={"/contact"}
            className={"my-5 ml-4 md:ml-10 lg:ml-7"}
          />
        </div>
      </div>
      {/* //! Next Section */}
    </div>
  );
  s;
};

export default PrimaryYearProgramm;
