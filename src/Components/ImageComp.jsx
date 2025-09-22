import { Image } from "@imagekit/react";
const ImageComp = ({ src, className, width, height, alt }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      loading="lazy"
      lqip={{ active: true, quality: 10 }}
      path={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default ImageComp;
