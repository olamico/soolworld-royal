import { Link } from "react-router-dom";
const MainCate = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/*Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          all post
        </Link>
        <Link
          to="/posts?cat=MostPopular"
          className="hover bg-blue-50 rounded-full px-4 py-2"
        >
          Most popular
        </Link>
        <Link
          to="/posts?cat=Trending"
          className="hover bg-blue-50 rounded-full px-4 py-2"
        >
          Trending
        </Link>
        <Link
          to="/posts?cat=Latest"
          className="hover bg-blue-50 rounded-full px-4 py-2"
        >
          Latest
        </Link>
        <Link
          to="/posts?cat=Catalogue"
          className="hover bg-blue-50 rounded-full px-4 py-2"
        >
          Catalogue
        </Link>
        <Link
          to="/posts?cat=WishList"
          className="hover bg-blue-50 rounded-full px-4 py-2"
        >
          Wishlist
        </Link>
        <span>|</span>
      </div>
      {/*Search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>
        <input type="text" placeholder="search a post" />
      </div>
    </div>
  );
};

export default MainCate;
