import icons from "@/utils/icons";
import images from "@/utils/images";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-black/60">
      <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 py-[30px] shadow-md lg:grid-cols-4 gap-5 md: gap-3  justify-center items-start">
        <div className="-mt-6">
          <div className="flex  items-center">
            <img src={images.logo} className=" w-20" />
            <p className="text-lg font-medium">Rimbero</p>
          </div>
          <p className="text-[14px] dark:text-white font-medium text-zinc-600">
            An authorized IB Primary Years Programme (PYP) World School in
            Lahore, nurturing curious minds on our 17-acre campus.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <p className="text-[14px] text-secondary dark:text-white/60">
              Diligence
            </p>
            <div className="w-1 h-1 rounded-full bg-secondary"></div>
            <p className="text-[14px] text-secondary dark:text-white/60">
              Integrity
            </p>
            <div className="w-1 h-1 rounded-full bg-secondary"></div>
            <p className="text-[14px] text-secondary dark:text-white/60">
              Excellence
            </p>
          </div>
        </div>
        {/* //? Second Dive */}
        <div className=" flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Explore</h1>
          <Link to={"/programmes"} className="text-[14px] hover:text-secondary">
            Programmes
          </Link>
          <Link to={"/about"} className="text-[14px] hover:text-secondary">
            About Us
          </Link>
          <Link to={"/admissions"} className="text-[14px] hover:text-secondary">
            Admissions
          </Link>
          <Link to={"/careers"} className="text-[14px] hover:text-secondary">
            Careers
          </Link>
        </div>
        {/* //! Third Dive */}
        <div className=" flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Resources</h1>
          <Link to={"/resources"} className="text-[14px] hover:text-secondary">
            Parent Handbook
          </Link>
          <Link to={"/about"} className="text-[14px] hover:text-secondary">
            Programme of Inquiry
          </Link>
          <Link to={"/resources"} className="text-[14px] hover:text-secondary">
            FAQs
          </Link>
          <Link to={"/about"} className="text-[14px] hover:text-secondary">
            Policies
          </Link>
        </div>
        {/* //? Fourth Dive */}
        <div className=" flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Contact</h1>
          <Link to={"/"} className="text-[14px] flex items-center gap-3 group">
            <icons.phone size={20} className="group-hover:text-secondary" />
            <span className="text-[14px] text-gray-600 group-hover:text-secondary">
              0322-1112222 | 0324-1113333
            </span>
          </Link>
          <Link to={"/"} className="text-[14px] flex items-center gap-3 group">
            <icons.email size={20} className="group-hover:text-secondary" />
            <span className="text-[14px] text-gray-600 group-hover:text-secondary">
              abc@gmail.com
            </span>
          </Link>
          <Link to={"/"} className="text-[14px] flex items-center gap-3 group">
            <icons.location size={25} className="group-hover:text-secondary" />
            <span className="text-[14px] text-gray-600 group-hover:text-secondary">
              Rimberio, Gohar Town, 10km main Road, Lahore
            </span>
          </Link>
          <Link to={"/"} className="text-[14px] flex items-center gap-3 group">
            <icons.clock size={25} className="group-hover:text-secondary" />
            <span className="text-[14px] text-gray-600 group-hover:text-secondary">
              Mon–Thu: 8:30 AM – 1:30 PM Fri: 8:30 AM – 12:30 PM
            </span>
          </Link>
          {/* //? Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-400 hover:bg-gray-500 group transition-all duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center">
              <icons.facebook
                size={23}
                className="text-white group-hover:text-primary"
              />
            </div>
            <div className="w-10 h-10 bg-gray-400 hover:bg-gray-500 group transition-all duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center">
              <icons.instagram
                size={23}
                className="text-white group-hover:text-[#E1306C]"
              />
            </div>
            <div className="w-10 h-10 bg-gray-400 hover:bg-gray-500 group transition-all duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center">
              <icons.linkedin
                size={23}
                className="text-white group-hover:text-[#0A66C2]"
              />
            </div>
            <div className="w-10 h-10 bg-gray-400 hover:bg-gray-500 group transition-all duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center">
              <icons.youtube
                size={23}
                className="text-white group-hover:text-[#FF0000]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[40px]">
        <hr className="w-[97%] h-[1px] bg-black mx-auto" />
        <div className="mt-3 px-10 flex items-center justify-between">
          <span className="text-[13px] text-center text-zinc-900">
            © 2026 Rimberio International School. All rights reserved.
          </span>
          <p className="flex items-center gap-2">
            <Link to={"/about"} className="text-[14px] hover:text-gray-600">
              Privacy Policy
            </Link>
            <Link to={"/about"} className="text-[14px] hover:text-gray-600">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
