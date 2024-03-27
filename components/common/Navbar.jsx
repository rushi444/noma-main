import React, { useEffect, useState } from "react";
import { LogoIcon, MenuIcon } from "./Icons";
import Link from "next/link";
import { navLinksData } from "./Helper";
import Sidebar from "./Sidebar";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

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
    <div className="max-w-[1118px] w-full py-6 md:py-8 mx-auto px-4 relative">
      <div className="flex justify-between items-center md:hidden">
        <div>
          <button type="submit" onClick={() => setSidebar(!sidebar)}>
            <MenuIcon />
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="p-2 w-[158px] h-[33px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-sm font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
          >
            BOOK YOUR CALL
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 max-md:hidden">
        <div>
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
        <div className="max-w-[863px] w-full flex items-center gap-3 justify-end md:justify-between">
          {navLinksData.map((item, index) => (
            <NavbarLinks item={item} value={item.name} key={index} />
          ))}

          <div>
            <button
              type="submit"
              className="p-2 w-[182px] h-[42px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
            >
              BOOK YOUR CALL
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[81px] block md:hidden ${
          sidebar ? "left-0 " : "left-[-150%]"
        } bg-light-purple w-full h-screen  duration-300 z-[99999] overflow-hidden `}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
