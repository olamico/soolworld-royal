import { Link } from "react-router-dom";
import MainCate from "../Components/MainCate";
import FeaturePost from "../Components/FeaturePost";
import PostList from "../Components/PostList";
const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*Breadcrum*/}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span>
          <h2 className="text-blue-800">Blogposts and Articles</h2>
        </span>
      </div>
      {/*Introduction*/}
      <div className="flex items-center justify-between">
        {/*title*/}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            SOOLWORLD, ROYAL PEARL AND BEAUTY SCENTS
          </h1>
          <p className="mt-8 text-md md:xl ">
            We deal in all types of perfumes, roll-on, body sprays, perfume oils
            and so on.
          </p>
        </div>
        {/*animated */}
        <Link to="/Write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m-75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1-150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                share review here
              </textPath>
            </text>
            <text>
              <textPath href="#circlePath" startOffset="50%">
                reviews don't lie
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/*Maincate*/}
      <MainCate />
      {/*FeaturedPost*/}
      <FeaturePost />
      {/*PostList*/}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent post</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
