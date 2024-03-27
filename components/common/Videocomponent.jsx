import React, { useState, useRef } from "react";
import { VideoPlayBtnIcon } from "./Icons";

const Videocomponent = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const videoElement = videoRef.current;

    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-[1120px] mx-auto px-4 h-fit relative">
      <video
        ref={videoRef}
        className=" w-full mx-auto rounded-xl"
        controls
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="w-full mx-auto max-w-[1120px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 h-full flex items-center ">
          <div
            onClick={togglePlay}
            className="bg-cover cursor-pointer bg-no-repeat bg-center bg-[url('/img/hero-bg.png')] h-full w-full rounded-xl   justify-center"
          >
            <button
              type="button"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={togglePlay}
            >
              <VideoPlayBtnIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videocomponent;
