import { Image as IKImage } from "@imagekit/react";

const CustomImage = ({ src, width, height, alt, className }) => {
  if (!src) return null;

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      loading="lazy"
      lqip={{ active: true, quality: 10 }}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default CustomImage;
