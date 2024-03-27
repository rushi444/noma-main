import Image from "next/image";
import React from "react";

const BlogopenImagecompo = ({ imageUrl }) => {
  return (
    <>
      <Image
        src={imageUrl}
        height={800}
        width={1120}
        className="mx-auto"
        alt={imageUrl}
      />
    </>
  );
};

export default BlogopenImagecompo;
