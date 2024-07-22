import React, { useEffect, useState } from "react";
import { FaqsIcons, LogoIcon, MenuIcon } from "./Icons";
import Link from "next/link";
import { navLinksData } from "./Helper";
import Sidebar from "./Sidebar";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebar]);
  return (
    <div className="max-w-[1118px] w-full py-6 lg:py-2 mx-auto px-4 relative">
      <div className="flex justify-between items-center lg:hidden">
        <div>
          <button type="submit" onClick={() => setSidebar(!sidebar)}>
            <MenuIcon />
          </button>
        </div>
        <div>
          <button
            // type="submit"
            className="p-2 w-[158px] h-[33px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-sm font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
            onClick={() =>
              window.open(
                "https://lp.noma-collective.com/schedule-your-meeting-page",
                "_self"
              )
            }
          >
            BOOK YOUR CALL
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 max-lg:hidden">
        {/* Logo */}
        <div className="mr-12">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="max-w-[820px] w-full flex items-center gap-11 justify-end lg:justify-between pl-4">
          <div className="max-lg:hidden flex items-center justify-center gap-11">
            {navLinksData.map((item, index) => (
              <NavbarLinks item={item} value={item.name} key={index} />
            ))}

            {/* Info dropdown */}
            <button
              onClick={() => setShowInfoDropdown(!showInfoDropdown)}
              className="flex items-center justify-center gap-[10px] group relative"
            >
              <span
                className={`text-sm lg:text-base text-[#313131] font-Montserrat leading-normal hidden md:block group-hover:font-bold ${
                  showInfoDropdown ? "font-bold" : "font-normal"
                }  transition-all duration-300`}
              >
                Info
              </span>
              <div
                className={`flex items-center justify-center w-4 transition-all duration-300 ${
                  showInfoDropdown ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaqsIcons />
              </div>
              {showInfoDropdown && (
                <div className="absolute -bottom-[105px] right-0 p-4 w-[150px] bg-white rounded shadow-2xl z-50 flex items-center flex-col justify-center gap-4 text-base text-[#313131] font-Montserrat leading-normal">
                  <Link href="#" className="hover:font-bold duration-300">
                    Info 1
                  </Link>
                  <Link href="#" className="hover:font-bold duration-300">
                    Info 2
                  </Link>
                </div>
              )}
            </button>
          </div>

          {/* Book your call */}
          <div>
            <button
              type="submit"
              className="p-2 w-[182px] h-[42px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
              onClick={() =>
                window.open(
                  "https://lp.noma-collective.com/schedule-your-meeting-page",
                  "_self"
                )
              }
            >
              BOOK YOUR CALL
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[81px] block lg:hidden ${
          sidebar ? "left-0 " : "left-[-150%]"
        } bg-light-purple w-full h-screen  duration-300 z-[99999] overflow-hidden `}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
