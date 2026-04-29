import { menuItems } from "@/utils/menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icons from "@/utils/icons";
const DesktopMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="flex items-center justify-center gap-8">
      {menuItems.map((item) => {
        if (item.submenu) {
          return (
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span className="text-[14px] cursor-pointer nav-link flex items-center">
                {item.title}
                <icons.downarrow size={26} />
              </span>

              <div
                className={`absolute mt-1 z-50 ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible pointer-events-none"} tracking-wide flex-col gap-1 left-[50%] -translate-x-[50%] w-[250px] bg-white border border-gray-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 p-2 flex`}
              >
                {item.submenu.map((sub) => (
                  <NavLink
                    onClick={() => setOpen(false)}
                    key={sub.id}
                    to={sub.sublink}
                    className={({ isActive }) =>
                      `text-[14px] font-normal w-full hover:bg-card py-3 px-3  transition-all duration-300 ease-in-out rounded-md ${isActive ? "text-secondary" : "text-muted-foreground"}`
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
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `text-[14px] font-normal transition-all duration-300 ease-in-out nav-link ${isActive ? "active" : "nav-link"}`
            }
          >
            {item.title}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
