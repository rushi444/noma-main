import Image from "next/image";
import React from "react";

const Embrence = () => {
  return (
    <>
      <section className="flex max-md:justify-center max-md:flex-col gap-6 xl:gap-[54px] items-center pt-[48px] pb-4 sm:pb-[77px] max-w-[1219px] w-full mx-auto xl:px-0 px-4">
        <div>
          {" "}
          <Image
            src="/img/enbrence_img.png"
            alt="enbrence_img"
            width={618}
            height={520}
            className="rounded-[16px] h-full"
          />
        </div>

        <div className="max-w-[557px] w-full flex-col flex gap-4">
          <h2 className=" text-2xl lg:text-[48px] font-sergio-trendy font-normal text-[#070707] capitalize !leading-[105%]">
            Embrace the nomadic way to life
          </h2>

          <p className="text-sm lg:text-base font-Montserrat font-normal text-[#070707]  leading-[105%]">
            At Noma Collective, we make the nomadic lifestyle achievable and
            enjoyable. Join us and discover the perfect blend of work, travel,
            and global community.
          </p>

          <ul className="ps-4 flex flex-col gap-[10px]">
            <li className="list-disc font-Montserrat text-sm lg:text-base font-normal leading-[150%] text-[#070707]">
              <span className="font-bold">Live Freely, Work Effectively:</span>
              Balance remote work, travel and adventure seamlessly with our
              remote-work-ready accommodations, curated group events and
              activities calendar, and wellness practices.
            </li>
            <li className="list-disc font-Montserrat text-sm lg:text-base font-normal leading-[150%] text-[#070707]">
              <span className="font-bold">Join a Global Tribe: </span>
              Connect, collaborate and grow with like-minded digital nomads from
              around the world as you live, work and adventure together on your
              edition (and beyond!).
            </li>{" "}
            <li className="list-disc font-Montserrat text-sm lg:text-base font-normal leading-[150%] text-[#070707]">
              <span className="font-bold"> Unique destinations: </span>
              Choose from our wide range of unique 'off the beaten path'
              destinations across the globe..
            </li>{" "}
            <li className="list-disc font-Montserrat text-sm lg:text-base font-normal leading-[150%] text-[#070707]">
              <span className="font-bold">Handpicked Accommodations:</span>
              Enjoy comfortable living in our carefully selected, work-friendly
              accommodations.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Embrence;
