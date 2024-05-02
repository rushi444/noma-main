import Link from "next/link";
import React from "react";
import { SidebarIcon } from "./Icons";
import { sidebarBgs } from "../utils/Functions";

const SidebarLinks = ({ item, value }) => {
  const { BgColor, TextColor } = sidebarBgs({ value });
  return (
    <div>
      <Link
        href={item.link}
        className="flex items-center justify-between px-9 py-4 text-sm font-Montserrat font-normal leading-normal font-kurdis"
        style={{ backgroundColor: BgColor, color: TextColor }}
      >
        <span>{item.name}</span>
        <SidebarIcon />
      </Link>
    </div>
  );
};

export default SidebarLinks;
