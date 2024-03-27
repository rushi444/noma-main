import React from "react";

const Footer = () => {
  return (
    <>
      <div className='bg-cover bg-center mt-[-100px] bg-[url("/img/footer-img.png")] w-full h-[102px]'></div>
      <div className="w-full bg-[#666] h-[532px] -mt-1 md:h-[542px]">
        <div className="py-4 block md:hidden">
          <p className="text-white text-center font-Montserrat text-2xl leading-normal font-extrabold">
            Sign up for our mailer
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
