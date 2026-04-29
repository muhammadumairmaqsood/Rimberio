import icons from "@/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Difference = () => {
  const data = [
    {
      id: 1,
      icn: icons.book,
      title: " ACADEMICS",
      values: [
        "Inquiry based learning",
        "International Baccalaureate (IB)",
        "Cambridge IGCSE",
      ],
    },
    {
      id: 2,
      icn: icons.cup,
      title: "SPORTS SCHOOL",
      values: ["Indoor/Outdoor Horse Riding Arena", "Swimming", "Taekwondo"],
    },
    {
      id: 3,
      icn: icons.star,
      title: "CO CURRICULAR",
      values: ["Robotics/Coding", "French", "Piano"],
    },
    {
      id: 4,
      icn: icons.handshak,
      title: "COLLABORATION",
      values: [
        "Shah Shamyl Alam Polo Academy",
        "Alliance Francaise",
        "School of Music & Arts",
      ],
    },
  ];
  return (
    <div className="w-full px-10 bg-background py-[80px]">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-xl font-medium md:text-4xl text-center"
      >
        The RBI Difference
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="md:text-[16px] text-[13px] text-sidebar-ring text-center mt-3"
      >
        A well-rounded approach to education that nurtures every aspect of your
        child
      </p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[95%] mx-auto my-10 px-2 swiper-wrapper"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full bg-gray-100 dark:bg-black  shadow-lg rounded-md  px-6 py-5 group cursor-pointer"
          >
            <div className="flex items-center justify-start gap-3">
              <div className="w-14 h-14 bg-secondary cursor-pointer transform transition-all duration-300 ease-in-out group-hover:-translate-y-1 rounded-full flex items-center justify-center">
                <item.icn size={26} className="text-white" />
              </div>
              <h1 className="text-lg md:text-2xl group-hover:text-secondary transition-all duration-300 ease-in-out  font-semibold mt-2">
                {item.title}
              </h1>
            </div>
            <div className="mt-3 flex gap-2 flex-col">
              {item.values.map((val, i) => (
                <div key={i} className="flex gap-3">
                  <icons.circle size={23} className="text-secondary" />
                  <span className="text-[14px] font-normal">{val}</span>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Difference;
