import Image from "next/image";
import React from "react";

const DigitalFreedom = () => {
  return (
    <section className="bg-[#BBE4D7] py-12">
      <div className="grid grid-cols-2 gap-10 max-w-[1450px] px-4 w-full mx-auto">
        <div className="col-span-1">
          <iframe
            src="https://link.jbenquet.com/widget/form/H7JLnG7Yp5NzB9ZvQdKX"
            // style="width:100%;height:100%;border:none;border-radius:36px"
            id="inline-H7JLnG7Yp5NzB9ZvQdKX"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Noma Collective Booking Form 2"
            data-height="1628"
            data-layout-iframe-id="inline-H7JLnG7Yp5NzB9ZvQdKX"
            data-form-id="H7JLnG7Yp5NzB9ZvQdKX"
            title="Noma Collective Booking Form 2"
            width="100%"
          ></iframe>
          <script src="https://link.jbenquet.com/js/form_embed.js"></script>
        </div>

        <div className="grid-span-2">
          {" "}
          <article className="w-full mt-4">
            <h3 className="text-[#070707] font-sergio-trendy text-[48px] sm:text-4xl lg:text-5xl font-normal leading-[106%] capitalize">
              Experience Digital Freedom
            </h3>
            <p className="text-[#070707] w-[90%] font-Montserrat text-xs lg:text-base font-normal leading-[115%] flex flex-col gap-1 pt-4 lg:pt-6">
              <span>
                We specialize in curating exceptional experiences for remote
                workers across the globe, complete with a like-minded community
                of nomads, co-working spaces and quality accommodation. If you
                can work from anywhere, make anywhere work for you.
              </span>
            </p>
          </article>
          <article>
            {" "}
            <Image
              className="mt-7"
              src="/img/digital-freedom.png"
              width={618}
              height={380}
            />
          </article>
          <article className="w-[95%] mt-10">
            <h3 className="text-[#070707] font-sergio-trendy text-[48px] sm:text-4xl lg:text-5xl font-normal leading-[106%] capitalize">
              Embrace the nomadic way to life
            </h3>
            <p className="text-[#070707] w-[95%] font-Montserrat text-base font-normal leading-[115%] flex flex-col gap-1 pt-4 lg:pt-6">
              <span className="w-[90%]">
                At Noma Collective, we make the nomadic lifestyle achievable and
                enjoyable. Join us and discover the perfect blend of work,
                travel, and global community.
              </span>
            </p>
            <div>
              <ul className="text-[#070707] w-[80%] font-Montserrat text-base font-normal leading-[115%] flex flex-col gap-6 pt-4 pl-3 lg:pt-6">
                <li className="list-disc">
                  <b>Live Freely, Work Effectively:</b> At Noma Collective, we
                  provide everything you need to embrace the nomadic lifestyle.
                  Enjoy remote-work-ready comfortable accommodations and curated
                  activities to tick off that bucket list.
                </li>
                <li className="list-disc">
                  <b>Join a Global Community:</b> Connect, collaborate and grow
                  with other remote professionals from around the world as you
                  live, work and explore together.
                </li>
                <li className="list-disc">
                  <b>Unique destinations:</b> Choose from our wide range of
                  unique 'off the beaten path' destinations across the globe..
                </li>
                <li className="list-disc">
                  <b>Handpicked Accommodations:</b> Enjoy comfortable living in
                  our carefully selected, work-friendly accommodations.
                </li>
              </ul>
            </div>
          </article>
          <article>
            {" "}
            <Image
              className="mt-7 w-[608px] h-[390px]"
              src="/img/WayToLiveCard.png"
              width={608}
              height={400}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default DigitalFreedom;
