<<<<<<< HEAD
import Image from "./Image";
=======
import { Image } from "@imagekit/react";
>>>>>>> 12996742734dbad0258678093035451bf45bb6a0
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="TOUCH-OIL.jpg"
          alt="TOUCH-OIL.jpg"
          className="rounded-2xl object-cover  h-80"
        />
      </div>
      {/*Details*/}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          asperiores quam provident libero pariatur rem,
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>written by</span>
          <Link className="text-blue-800">Joe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aperiam corrupti qui dolore corporis consectetur minus fuga expedita
          iste non, sed quo quod, cum voluptas impedit officiis architecto illo
          inventore.
        </p>
        <Link to="/test" className="underline text-blue-800 text:sm">
          read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
