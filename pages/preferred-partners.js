import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import { SelectDownArrow } from "@/components/common/Icons";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { getAllPreferredPartners } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import groupBy from "lodash/groupBy";
import AnimateHeight from "react-animate-height";
import { BLOCKS } from "@contentful/rich-text-types";
import { Children, useState } from "react";
import Image from "next/image";

export const getServerSideProps = async () => {
  const preferredPartners = await getAllPreferredPartners();
  return {
    props: {
      preferredPartners:
        preferredPartners?.preferredPartnersCollection?.items || [],
      title: "Preferred Partners",
    },
  };
};

const PreferredPartners = ({ preferredPartners }) => {
  const groupedPartners = groupBy(preferredPartners, "category");

  return (
    <Layout>
      <PageSEO title="Noma - Preferred Partners" />
      <HeroImage bg='url("/img/contact-us-cover.png")' />
      <div className="mb-[400px] sm:mb-[150px]">
        <div className="my-4">
          <Heading heading="Our Preferred Partners" />
        </div>
        <h4 className="font-Montserrat my-4 font-bold text-2xl text-center px-4">
          Tools, Resources, and Guides for Nomads
        </h4>
        <div className="m-auto max-w-[1000px]">
          {Object.entries(groupedPartners).map(
            ([category, partners], index) => {
              const [open, setOpen] = useState(true);
              return (
                <div
                  key={index + "this is a faq"}
                  className="flex flex-col mb-6"
                >
                  <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="faq-btn-style"
                  >
                    <h3 className="text-carbon-Black font-Montserrat text-sm sm:text-base">
                      {category}
                    </h3>
                    <span className="bg-pastel-yellow px-4 sm:px-8 py-5 sm:py-4 rounded-r-full">
                      <SelectDownArrow />
                    </span>
                  </div>
                  <AnimateHeight
                    duration={300}
                    height={open ? "auto" : 0}
                    className="transition-height custom-shadow"
                  >
                    {Children.toArray(
                      partners.map((partner) => (
                        <div
                          className={`flex px-5 sm:px-8 pb-4 pt-12  relative -mt-7  rounded-t-[57px] min-h-[400px] ${
                            open ? "custom-shadow" : ""
                          }`}
                        >
                          <div className="sm:flex w-full">
                            <Image
                              src={partner?.picture?.url}
                              alt={partner?.name}
                              className="w-[300px] h-[300px] object-cover rounded-xl mx-auto"
                              width={300}
                              height={300}
                            />
                            <div className="px-4 text-center">
                              <div className="text-center w-full">
                                <h3 className="text-carbon-Black font-Montserrat text-xl font-bold">
                                  {partner?.name}
                                </h3>
                                <h3 className="text-carbon-Black font-Montserrat text-md">
                                  {partner?.oneLiner}
                                </h3>
                              </div>
                              <br />

                              <div>
                                {documentToReactComponents(
                                  partner?.description?.json,
                                  {
                                    renderNode: {
                                      [BLOCKS.PARAGRAPH]: (node, children) => {
                                        return (
                                          <>
                                            <p>{children}</p>
                                            <br />
                                          </>
                                        );
                                      },
                                    },
                                  }
                                )}
                              </div>

                              <div className="flex justify-center mb-7">
                                <button
                                  className="p-2 w-[200px] h-[50px] flex items-center justify-center bg-main-orange rounded-[28px] text-white text-sm font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
                                  onClick={() =>
                                    window.open(partner?.link || "", "_blank")
                                  }
                                >
                                  GET YOUR DISCOUNT
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </AnimateHeight>
                </div>
              );
            }
          )}
        </div>{" "}
        <div className="h-[450px] bg-[#ECECFD]">
          <h4 className="font-Montserrat my-4 font-bold text-2xl text-center px-4 pt-2">
            Want to share your product with our community? Contact us below
          </h4>
          <iframe
            src="https://link.jbenquet.com/widget/form/00dE96FQ6mW7pPN6oRpe"
            className="w-full h-full border-none rounded-[36px]"
            id="inline-00dE96FQ6mW7pPN6oRpe"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="contact us"
            data-height="400"
            data-layout-iframe-id="inline-00dE96FQ6mW7pPN6oRpe"
            data-form-id="00dE96FQ6mW7pPN6oRpe"
            title="contact us"
          ></iframe>
          <script src="https://link.jbenquet.com/js/form_embed.js"></script>
        </div>
      </div>
    </Layout>
  );
};

export default PreferredPartners;
