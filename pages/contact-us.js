import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { FaqsSlider } from "@/components/contact-us/FaqsSlider";
import { getFaqs } from "@/lib/api";
import Link from "next/link";

export const getServerSideProps = async () => {
  const faqs = await getFaqs();
  return {
    props: {
      title: "Contact",
      faqs: faqs || [],
    },
  };
};

const ContactUs = ({ faqs }) => {
  return (
    <Layout>
      <PageSEO title="Noma - Contact us" />
      <HeroImage bg='url("/img/contact-us-cover.png")' />
      <div className="my-4">
        <Heading heading="Contact Us" />
      </div>
      <h4 className="font-Montserrat my-4 font-bold text-2xl text-center">
        Have some questions? check our FAQs
      </h4>
      <FaqsSlider faqs={faqs?.faqCollection?.items} />
      <div className="text-center m-auto w-full bg-light-purple ">
        <div className="px-4 max-w-[1000px] m-auto">
          <h4 className="py-4 pb-8 text-3xl font-bold font-Montserrat">
            Do you prefer personal assistance? Connect with us
          </h4>
          <div className="flex justify-center gap-4">
            <input
              placeholder="First name"
              className="w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />
            <input
              placeholder="Last name"
              className="w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />
          </div>
          <div className="justify-center mt-2">
            <input
              placeholder="Email"
              className="m-auto w-[820px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />
          </div>

          <div className="flex mt-4 justify-center gap-2">
            <button
              type="submit"
              className="p-2 w-[250px] h-[42px] flex items-center justify-center bg-[#FC5B67] rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-[#FC5B67] hover:bg-transparent transition duration-300 ease-in-out  border border-[#FC5B67]"
              onClick={() =>
                window.open(
                  "https://lp.noma-collective.com/schedule-your-meeting-page",
                  "_blank"
                )
              }
            >
              SEND INQUIRY VIA EMAIL
            </button>
            <button
              type="submit"
              className="p-2 w-[182px] h-[42px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
              onClick={() =>
                window.open(
                  "https://lp.noma-collective.com/schedule-your-meeting-page",
                  "_blank"
                )
              }
            >
              BOOK YOUR CALL
            </button>
          </div>

          <div
            className="text-gray-500 text-sm mt-4 pb-8 w-[900px] pl-[100px] text-left"
          >
            Submitting this form means you opt in to receive communications from
            us and read about our latest updates. You can unsubscribe at any
            time.
          </div>
        </div>
      </div>
      <div className="socials text-center">
        <h4 className="py-4 pb-8 text-3xl font-bold font-Montserrat">
          Not an email person? write us in any of our socials, let's connect
        </h4>

        <div className="column-uno text-white pb-[300px]">
          <div className="flex gap-2 mb-2 -mt-8">
            {/* <Link href="https://www.instagram.com/noma_collective/">
              <img
                src="/img/socials/instagram.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link>
            <Link href="https://www.facebook.com/nomacollectiveHQ/">
              <img
                src="/img/socials/facebook.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link>
            <Link href="https://twitter.com/noma_collective?lang=en">
              <img
                src="/img/socials/twitter.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/nomacollective">
              <img
                src="/img/socials/linkedin.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link>
            <Link href="https://www.tiktok.com/@nomacollective">
              <img
                src="/img/socials/tiktok.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCi_aI11Tz4u8JZMLoF2UMGQ">
              <img
                src="/img/socials/youtube.png"
                style={{ height: "64px", width: "64px" }}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
