import { Link } from "react-router-dom";
import { Image } from "@imagekit/react";
const FeaturePost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/*First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="TOUCH-OIL.jpg"
          alt="TOUCH-OIL.jpg"
          className="rounded-3xl object-cover"
        />
        {/* details*/}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01</h1>
          <Link className="text-blue-800 lg:text-lg">Most Popular</Link>
          <span className="text-gray-500">2 mins ago</span>
        </div>
        {/*title */}
        <Link
          to="./test"
          className="text-xl lg:tex-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing
        </Link>
      </div>
      {/*Others*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*second*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src="OIL.jpg"
            alt="OIL.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/*Details and Title*/}
          <div className="w-2/3">
            {/*detail*/}
            <div className="flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <div>
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>

        {/*Third*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src="OIL.jpg"
            alt="OIL.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/*Details and Title*/}
          <div className="w-2/3">
            {/*detail*/}
            <div className="flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <div>
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
        {/*Fourth*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src="OIL.jpg"
            alt="OIL.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/*Details and Title*/}
          <div className="w-2/3">
            {/*detail*/}
            <div className="flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <div>
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
