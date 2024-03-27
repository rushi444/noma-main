import React from "react";
import { accomodationCardBg } from "../utils/Functions";

const AccomodationCardBtns = ({ item, value }) => {
  const { BgColor, TextColor } = accomodationCardBg({ value });
  return (
    <>
      <button
        type="submit"
        className="px-3 py-2 rounded-full font-Montserrat text-sm font-normal "
        style={{ backgroundColor: BgColor, color: TextColor }}
      >
        {item.button}
      </button>
    </>
  );
};

export default AccomodationCardBtns;
