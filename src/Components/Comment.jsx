<<<<<<< HEAD
import Image from "./Image";
=======
import { Image } from "@imagekit/react";
>>>>>>> 12996742734dbad0258678093035451bf45bb6a0
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="userImg.jpeg"
          alt="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Mich Ola</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem laudantium laborum laborum laborum laborum laborum laborum
          laborum laborum laborum laborum laborum l
        </p>
      </div>
    </div>
  );
};

export default Comment;
