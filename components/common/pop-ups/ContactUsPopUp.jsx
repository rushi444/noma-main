import Image from "next/image";

const ContactUsPopUp = ({ isOpened, onClick }) => {
  return (
    <>
      {isOpened && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex justify-center z-10 p-4 md:p-10 2xl:mt-[13%] xl:mt-[13%] lg:mt-[13%] md:mt-[25%] sm:mt-[25%] mt-[13%]">
            <div className="grid grid-cols-1 2xl:min-w-[680px] h-full h-screen xl:min-w-[600px] lg:min-w-[500px] md:min-w-[430px] sm:min-w-[380px] ">
              <div>
                <div>
                  <div>
                    <button
                      onClick={onClick}
                      className="cursor-pointer w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center ml-auto relative -mb-[30px] -mr-[12px] z-50"
                    >
                      <Image
                        src="/img/XIcon.svg"
                        width={30}
                        height={30}
                      ></Image>
                    </button>
                  </div>

                  <div className="z-50">
                    <iframe
                      src="https://link.jbenquet.com/widget/form/tTcLes11EwcWU11Wcinv"
                      id="inline-tTcLes11EwcWU11Wcinv"
                      // data-layout="{'id':'INLINE'}"
                      width="100%"
                      height="100%"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Noma Collective Booking Form 1 Pop-Up"
                      data-height="561"
                      data-layout-iframe-id="inline-tTcLes11EwcWU11Wcinv"
                      data-form-id="tTcLes11EwcWU11Wcinv"
                      title="Noma Collective Booking Form 1 Pop-Up"
                      className="flex self-center z-50 h-full"
                    ></iframe>
                    <script src="https://link.jbenquet.com/js/form_embed.js"></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactUsPopUp;
