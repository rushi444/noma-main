import Image from "next/image";
import React from "react";
import ProfileDataCardBtn from "./ProfileDataCardBtn";

const ProfileData = ({ items }) => {
  return (
    <div className="max-w-[328px] w-full cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out  mx-auto flex flex-col gap-2">
      <h1 className="text-[#313131] font-Montserrat text-[24px] sm:text-[32px] font-extrabold leading-normal">
        {items.name}
      </h1>
      <div className="flex gap-2">
        {items.btn.map((item, index) => (
          <ProfileDataCardBtn item={item} value={index} key={index} />
        ))}
      </div>
      <Image
        src={items.img}
        height={328}
        width={328}
        alt="img"
        className="rounded-2xl"
      />
      <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal !leading-5">
        {items.description}
      </p>
    </div>
  );
};

export default ProfileData;
