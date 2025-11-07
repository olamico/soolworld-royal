import { useUser } from "@clerk/clerk-react";
const Write = () => {
  /*  const { isLoaded, isSignedIn } = useUser;
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">you should sign in!</div>;
  }*/

  return (
    <div className=" gap-4 ">
      <h1 className="text-xl font-semibold">Create a New Post</h1>
      <form className="flex flex-col">
        <button className=" mt-2 mb-2 w-36 text-gray-500">
          Add a cover image
        </button>
        <input className="w-36" type="text" placeholder="My awesome story" />
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="mt-2 text-gray-500">
            Choose a Category
          </label>
          <select className="mb-4 w-24 text-gray-500" name="cat" id="">
            <option value="general">general</option>
            <option value="popular">popular</option>
            <option value="trending">Trending</option>
            <option value="Wishlist">WishList</option>
            <option value="Catalogue">Catalogue</option>
            <option value="Latest">Latest</option>
            <option value="seo">Search</option>
          </select>
        </div>
        <div className="flex flex-col gap-6 ">
          <textarea
            className="rounded-xl rounded-xl p-1 w-48"
            name="desc"
            placeholder="A short Description"
          ></textarea>
          <textarea
            className="rounded-xl p-2 h-72"
            name="desc"
            placeholder="write your story"
          ></textarea>
          <button className="w-24 rounded-xl bg-blue-800 text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
