import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinksColors } from "../utils/Functions";

const NavbarLinks = ({ item, value }) => {
  const path = usePathname();
  const Color = navbarLinksColors({ value });
  return (
    <>
      {item.name === "Alumni (Soon)" ? (
        <span
          className={`text-sm lg:text-base first:md:hidden last:pointer-events-none font-Montserrat leading-normal hidden md:block ${
            path === item.link ? "font-bold" : "font-normal"
          }  hover:bg-transparent transition duration-300 ease-in-out `}
          style={{ color: Color }}
        >
          {item.name}
        </span>
      ) : (
        <Link
          href={item.link}
          className={`text-sm lg:text-base last:cursor-none first:md:hidden last:pointer-events-none font-Montserrat leading-normal hidden md:block ${
            path === item.link ? "font-bold" : "font-normal"
          } hover:!text-main-orange las:hover hover:bg-transparent transition duration-300 ease-in-out `}
          style={{ color: Color }}
        >
          {item.name}
        </Link>
      )}
    </>
  );
};

export default NavbarLinks;
