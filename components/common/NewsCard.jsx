import Image from "next/image";
import React from "react";

const NewsCard = ({ item }) => {
  return (
    <article className="flex flex-col hover:scale-95 cursor-pointer transition duration-300 ease-in-out pb-5 md:pb-0 items-center">
      <article className="max-w-[328px] w-full pb-8">
        <button
          type="submit"
          className="p-[8px_7px] rounded-[31px] bg-purple max-w-[169px] w-full text-carbon-Black font-Montserrat text-sm font-normal leding-normal shadow-[0px_2px_2px_0px_rgba(0,0,0,0.10)]"
        >
          {item.btn}
        </button>
        <Image
          className="rounded-lg mt-2 max-sm:w-full"
          src={item.src}
          width={328}
          height={400}
          alt={item.src}
        />
        <h1 className="text-carbon-Black font-Montserrat text-2xl font-extrabold mt-2 leading-normal line-clamp-3">
          {item.text}
        </h1>
      </article>
      <article className=" mx-auto w-fit">
        <button
          type="submit"
          className="px-8 py-4 bg-main-red rounded-[28px] text-white text-center text-base font-extrabold leading-normal hover:text-main-red hover:bg-transparent transition duration-300 ease-in-out  border border-main-red"
        >
          {item.btn2}
        </button>
      </article>
    </article>
  );
};

export default NewsCard;
