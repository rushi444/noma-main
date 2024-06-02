import React from "react";
import { CommentIcon, LikeIcon, ShareIcon } from "../common/Icons";

const SocialMediaCardFooter = ({ color }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <LikeIcon color={color} />
      <CommentIcon />
      <ShareIcon />
    </div>
  );
};

export default SocialMediaCardFooter;
