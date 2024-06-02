import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { ModalCloseIcon } from "./Icons";

const SignUpModal = ({ isClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onClose={isClose} className="relative z-40">
      <div
        className="fixed inset-0 backdrop-blur-sm bg-light-grey opacity-25"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 sm:p-5">
        <DialogPanel className="mx-auto max-w-[562px] w-full relative bg-romance  rounded-[16px] ">
          <DialogTitle className="">
            <div className="">
              <img
                className="rounded-t-[16px]"
                src="/img/sign-up-modal-bg.webp"
                alt="bg-image"
              />
            </div>
            <span
              onClick={isClose}
              className="cursor-pointer absolute -top-6 -right-2 sm:-right-5 "
            >
              <ModalCloseIcon />
            </span>
          </DialogTitle>
          <div className="flex justify-center items-center py-3 px-5">
            <h3 className="text-carbon-Black text-[30px] sm:text-[42px] lg:text-[48px] font-sergio-trendy capitalize text-center leading-[120%]">
              Sign up for our mailer
            </h3>
          </div>
          <div className="py-2 px-5 flex justify-center items-center">
            <input
              type="text"
              placeholder="Email"
              className=" !bg-pastel-yellow px-4 py-2 rounded-full !text-squantgrey focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          <p className="text-light-grey text-xs font-Montserrat px-8">
            Submitting this forms means you opt in to receive communication from
            us and read about our latest updates. You can unsubscribe at any
            time.
          </p>

          <div className="flex justify-center gap-6 my-4 sm:my-8 pb-4 w-full">
            <button
              onClick={isClose}
              className="rounded-full bg-orange-400 text-lynxwhite px-6 py-3 font-Montserrat font-extrabold uppercase"
            >
              LET'S CONNECT
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SignUpModal;
