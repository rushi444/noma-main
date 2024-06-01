"use client";
import React, { useState } from "react";
import SocialMediaCardFooter from "./SocialMediaCardFooter";

const SocialMediaList = ({ List, index }) => {
  const [likedCards, setLikedCards] = useState({});
  console.log(likedCards);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div
      key={index}
      onDoubleClick={() => toggleLike(List.id)}
      className="w-[328px] hover:scale-[1.02] transition duration-300 ease-in-out rounded-full cursor-pointer "
    >
      <div className="rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] mt-2 bg-white">
        <div className="flex items-center gap-3 px-4 py-2">
          <img
            className="max-w-[34px] w-full"
            src={List.logoSrc}
            alt="card-logo"
          />
          <p className="text-xs text-[#1E1E1E] font-extrabold font-Montserrat">
            {List.username}
          </p>
        </div>
        <div className="">
          <img src={List.imageSrc} alt="" />
        </div>
        <SocialMediaCardFooter color={likedCards[List.id]} />
      </div>
    </div>
  );
};

export default SocialMediaList;
