import React from "react";

const BlogOpenHero = () => {
  return (
    <div className="bg-[url(/img/blog-open-hero.png)] h-[464px] bg-cover bg-center flex flex-col gap-12 pt-8 px-4 justify-center items-center">
      <h2 className="text-lynxwhite font-sergio-trendy text-3xl sm:text-5xl font-normal capitalize leading-normal ">
        Faffy Name For Blog
      </h2>
      <button
        type="submit"
        className="sm:p-[16px_32px] p-[8px_16px] rounded-[28px] bg-romance text-[#1E1E1E] font-Montserrat text-base font-extrabold leading-normal border-[2px] border-romance hover:bg-transparent transition duration-300 ease-in-out hover:text-romance "
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default BlogOpenHero;
