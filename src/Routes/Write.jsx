import { useUser } from "@clerk/clerk-react";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser;
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">you should sign in!</div>;
  }

  return (
    <div className="">
      <h1>Create a New Post</h1>
      <form>
        <button> Add a cover image</button>
        <input type="text" placeholder="My awesome story" />
        <div className="">
          <label htmlFor="">Choose a Category</label>
          <select name="cat" id="">
            <option value="general">general</option>
            <option value="popular">popular</option>
            <option value="trending">Trending</option>
            <option value="Wishlist">WishList</option>
            <option value="Catalogue">Catalogue</option>
            <option value="Latest">Latest</option>
            <option value="seo">Search</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A short Description"></textarea>
      </form>
    </div>
  );
};

export default Write;
