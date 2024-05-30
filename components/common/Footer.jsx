import Link from "next/link";
import React from "react";
import { LogoIcon } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className='bg-cover bg-center mt-[-100px] bg-[url("/img/footer-img.png")] w-full h-[102px]'></div>
      <div className="w-full bg-[#666] h-[632px] -mt-1 md:h-[342px] px-2">
        <div className="py-4 sm:flex sm:flex-col sm:justify-center sm:items-center">
          <p className="text-white text-center font-sergio-trendy text-4xl leading-normal font-extrabold">
            Sign up for our mailer
          </p>
          <div className="max-w-[550px] mb-8">
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Email"
                className="form-input px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-blue-500 w-[350px]"
              />
              <button className="rounded-full bg-orange-400 text-white px-4 font-Montserrat">
                LET'S CONNECT
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: "#C4C4C4" }}>
              Submitting this forms means you opt in to receive communication
              from us and read about our latest updates. You can unsubscribe at
              any time.
            </p>{" "}
          </div>
          <div className="pl-4 sm:pl-0 sm:flex sm:justify-around sm:w-full max-w-[1000px]">
            <div className="column-uno text-white">
              <Link href="/">
              <img src='/img/high-res-logo.png' width={150} className='-ml-3'/>
              </Link>
              <div className="flex gap-2 mb-2 -mt-8">
                <Link href="https://www.instagram.com/noma_collective/">
                  <img
                    src="/img/socials/instagram.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
                <Link href="https://www.facebook.com/nomacollectiveHQ/">
                  <img
                    src="/img/socials/facebook.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
                <Link href="https://twitter.com/noma_collective?lang=en">
                  <img
                    src="/img/socials/twitter.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/nomacollective">
                  <img
                    src="/img/socials/linkedin.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@nomacollective">
                  <img
                    src="/img/socials/tiktok.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
                <Link href="https://www.youtube.com/channel/UCi_aI11Tz4u8JZMLoF2UMGQ">
                  <img
                    src="/img/socials/youtube.png"
                    style={{ height: "16px", width: "16px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="column-dos flex flex-col text-white mb-2">
              <Link href="/location">LOCATIONS</Link>
              <Link href="/how-it-works">HOW IT WORKS</Link>
              <Link href="/news">WHAT'S NEW</Link>
              <Link
                href="https://lp.noma-collective.com/schedule-your-meeting-page"
                target="_blank"
              >
                BOOK A CALL
              </Link>
            </div>
            <div className="column-dos flex flex-col text-white">
              <Link href="/how-it-works">FAQ</Link>
              <Link href="/">TERMS & CONDITIONS</Link>
              <Link href="/">PRIVACY POLICY</Link>
              <Link href="/contact-us">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
