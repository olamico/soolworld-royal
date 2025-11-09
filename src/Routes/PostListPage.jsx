import SideMenu from "../Components/SideMenu";
import PostList from "../Components/PostList";
import { useState } from "react";
const PostlistPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1>Perfume pages</h1>
      <button onClick={() => setOpen((prev) => !prev)} className="md:hidden">
        {open ? "close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostlistPage;
