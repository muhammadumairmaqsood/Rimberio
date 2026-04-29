import icons from "@/utils/icons";
import images from "@/utils/images";
const WhoWe = () => {
  return (
    <div className="w-full px-10 py-[20px] md:py-[60px] bg-background flex items-center justify-start md:flex-row flex-col-reverse gap-5">
      <div className="flex-1" data-aos="zoom-in" data-aos-delay="100">
        <p className="md:text-[17px] mb-2 text-[14px] text-secondary font-medium">
          Who We Are
        </p>
        <h1 className="text-xl text-primary leading-[50px] font-semibold tracking-wide md:text-4xl lg:text-5xl">
          Where Excellence Becomes an Experience
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground tracking-wide">
          Rimberio International offers families the choice of globally
          recognised programmes, including the IB Primary Years Programme (PYP)
          and the Cambridge International Pathway-Primary to IGCSE.
        </p>
        <p className="mt-3 text-[15px] text-muted-foreground tracking-wide">
          Located on a 17-acre campus in Lahore, our school provides exceptional
          learning spaces - from robotics labs to Pakistan's first indoor riding
          arena - where students grow academically, creatively, and with
          confidence.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-10 flex flex-col items-start justify-center gap-2"
        >
          <div className="flex items-start justify-start gap-5">
            <icons.hand size={30} className="text-secondary" />
            <p className="text-lg font-medium text-gray-500">
              "When you have had a taste of excellence, you cannot go back to
              mediocrity."
            </p>
          </div>
          <span className="text-[13px] text-muted-foreground">
            {" "}
            - Maximillian
          </span>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="h-full w-full md:w-[40%]"
      >
        <img
          src={images.horse}
          alt="Horse image"
          className="h-full w-full object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
};

export default WhoWe;
