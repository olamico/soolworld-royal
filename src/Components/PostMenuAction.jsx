
const PostMenuAction = () => {
  return (
    <div className="">
      <h1>Action</h1>
      <div className="flex items-center gap-2 text-sm py-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="red"
          viewBox="0 0 24 24"
        >
          <path d="M5 3h14l2 2v16H3V3h2zm7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-5-8h10V5H7v4z" />
        </svg>
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 text-sm py-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="black"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 6h18M6 6v14h12V6M9 6V4h6v2"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
