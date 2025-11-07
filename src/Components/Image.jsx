import { IKImage } from "imagekitio-react";
const Image = ({ src, className, width, height, alt }) => {
  return (
    <IKImage
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

export default Image;
