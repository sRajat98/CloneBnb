import React from "react";
import Image from "./ImageView.styled";

const ImageView = ({ src, srcSet, alt, imageStyles, title }) => {
  return (
    <Image
      src={src}
      srcSet={srcSet}
      alt={alt}
      imageStyles={imageStyles}
      title={title}
    />
  );
};

export default ImageView;
