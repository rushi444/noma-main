import Image from "next/image";

const ContactUsPopUp = ({ isOpened, onClick }) => {
  return (
    <>
      {isOpened && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex justify-center z-10 p-4 md:p-10">
            <div className="grid grid-cols-1 min-w-[90%] md:min-w-[680px] ">
              <div>
                <div className="grid grid-cols-1">
                  <div>
                    <button
                      onClick={onClick}
                      className="cursor-pointer w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center ml-auto relative -mb-[30px] -mr-[15px] z-10"
                    >
                      <Image
                        src="/img/XIcon.svg"
                        width={30}
                        height={30}
                      ></Image>
                    </button>
                    <Image
                      src="/img/PopUpImage.svg"
                      alt="swiper card"
                      width={700}
                      height={328}
                      className="z-10 w-full"
                    />
                  </div>
                </div>

                <div className="relative flex items-center h-[135px] bg-[#F4F1E6] -mb-[31px] z-10">
                  <span className="mx-auto flex text-center capitalize font-sergio-trendy text-2xl md:text-4xl lg:text-5xl text-[#313131]">
                    Sign up for our <br /> mailer
                  </span>
                </div>
                <iframe
                  src="https://link.jbenquet.com/widget/form/DrDwCvYAdo6wSM8cwJSx"
                  id="inline-DrDwCvYAdo6wSM8cwJSx"
                  width="100%"
                  height="400"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Pop up"
                  data-layout-iframe-id="inline-DrDwCvYAdo6wSM8cwJSx"
                  data-form-id="DrDwCvYAdo6wSM8cwJSx"
                  title="Pop up"
                  className="flex self-center z-10"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactUsPopUp;
