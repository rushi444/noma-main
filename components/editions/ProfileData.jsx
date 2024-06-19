import React from "react";
import ProfileDataCardBtn from "./ProfileDataCardBtn";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProfileData = ({ items }) => {
  return (
    <div className="max-w-[328px] w-full cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out  mx-auto flex flex-col gap-2">
      <span className="text-[#313131] font-Montserrat text-[24px] sm:text-[32px] font-extrabold leading-normal">
        {items.alumniName}
      </span>
      <div className="flex gap-2">
        <ProfileDataCardBtn
          item={{ btn1: `${items?.numberOfTrips} x Editions` }}
          value={0}
        />
        <ProfileDataCardBtn item={{btn1: items?.jobTitle}} value={1} />
      </div>

      <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal !leading-5">
        {documentToReactComponents(items?.review?.json)}
      </p>
    </div>
  );
};

export default ProfileData;
