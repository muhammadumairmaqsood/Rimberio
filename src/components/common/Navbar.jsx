import images from "@/utils/images";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import icons from "@/utils/icons";
import { menuItems } from "@/utils/menu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(false);
      setSubMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`w-full max-w-[100vw] sticky top-0 z-50 px-8 py-1 bg-[#F2F2F2] dark:bg-black shadow relative scrolled
          ? " bg-white/95 shadow-md "
          : "bg-[#F2F2F2]"
      } `}
    >
      {/* //!Desktop Men */}
      <nav className="flex items-center justify-between ">
        {/* //? Logo */}
        <Link to={"/"} className="flex items-center">
          <img
            src={images.logo}
            alt="Logo"
            className="md:w-20 w-10 object-cover"
          />
          <span className="md:text-2xl text-sm sm:text-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent">
            Rimbero
          </span>
        </Link>
        {/* //? Desktop Menu */}
        <div className="hidden lg:flex gap-4">
          <DesktopMenu />
          <ModeToggle />
        </div>
        {/* //? Mobile Menu */}
        <div className="flex gap-4 lg:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <icons.close size={26} /> : <icons.menu size={26} />}
          </button>
          <ModeToggle />
        </div>
        {/* //? Mobile Menu Items */}
        <div
          className={`absolute top-12 md:top-22 right-0 z-50 w-full dark:bg-zinc-900 transition-all duration-300 ease-in-out  bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${openMenu ? "opacity-100 translate-y-0 visible" : "opacity-0  -translate-y-5 invisible pointer-events-none"} `}
        >
          <div className="flex flex-col px-3 py-4 h-full">
            {menuItems.map((item) => {
              if (item.submenu) {
                const isOpen = subMenu === item.title;
                return (
                  <div className="relative">
                    <span
                      className="text-[16px] cursor-pointer ml-2 justify-start flex items-center gap-1 text-primary hover:text-secondary"
                      onClick={() => setSubMenu(isOpen ? null : item.title)}
                    >
                      {item.title}
                      <icons.downarrow size={26} />
                    </span>
                    <div
                      className={`flex overflow-hidden transition-all duration-300 ease-in-out flex-col gap-2 ml-5 ${subMenu ? "max-h-50 opacity-100 translate-y-0" : " max-h-0 opacity-0 translate-y-2"}`}
                    >
                      {item.submenu.map((sub, i) => (
                        <NavLink
                          to={sub.sublink}
                          onClick={() => {
                            setSubMenu(false);
                            setOpenMenu(false);
                          }}
                          className={({ isActive }) =>
                            `w-full px-3 rounded-lg py-3 ${isActive ? "text-primary" : "text-secondary hover:text-primary"}`
                          }
                        >
                          {sub.subtitle}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  to={item.link}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `text-primary w-full px-3 rounded-lg py-3 ${isActive ? "text-secondary" : "text-primary hover:text-secondary"}`
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
      {/* //!Desktop Men */}
    </div>
  );
};

export default Navbar;
