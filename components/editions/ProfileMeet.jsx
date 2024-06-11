import Image from "next/image";
import React from "react";
import { FaciltiesIcons } from "../common/Icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProfileMeet = ({ manager }) => {
  return (
    <div className="bg-[#F4F1E6] my-4">
      <div className="max-w-[779px] w-full mx-auto pt-4 max-sm:pb-8 sm:py-6 xl:px-0 px-4">
        <div className="flex gap-4 items-center sm:hidden">
          <FaciltiesIcons />
          <p className="text-[#313131] font-Montserrat text-base font-extrabold  ">
            {/* Management and Host */}
          </p>
        </div>
        <div className=" flex max-sm:flex-col justify-center xl:justify-end gap-1 sm:gap-8 md:gap-[68px] items-center max-sm:mt-[38px]">
          <div className="max-w-[265px] w-full">
            <h1 className="text-[#313131] font-Montserrat text-xl sm:text-[32px] font-extrabold leading-normal max-sm:text-center">
              Meet {manager?.name}
            </h1>
            <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal leading-normal">
              Your local Community Manager
            </p>
            <Image
              src="/img/meet-profile.png"
              height={247}
              width={249}
              className="pt-4"
              alt="img"
            />
          </div>
          <div className="sm:max-w-[298px] w-full flex flex-col gap-2 sm:gap-4 text-center text-[#313131] text-sm sm:text-base font-normal font-Montserrat leading-normal">
            {documentToReactComponents(manager?.description?.json)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMeet;
