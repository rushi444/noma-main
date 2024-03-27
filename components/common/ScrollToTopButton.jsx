// components/ScrollToTopButton.js

import { useEffect, useState } from "react";
import { ScrollToTopButtonIcon } from "./Icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition-colors duration-300"
        >
          <ScrollToTopButtonIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
