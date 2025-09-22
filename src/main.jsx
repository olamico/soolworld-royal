import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import PostListPage from "./Routes/PostListPage";
import RegisterPage from "./Routes/RegisterPage";
import SignInPage from "./Routes/SignInPage";
import SinglePostPage from "./Routes/SinglePostPage";
import Write from "./Routes/Write";
import MainLayout from "./Layouts/MainLayout";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/RegisterPage",
        element: <RegisterPage />,
      },
      {
        path: "/SignInPage",
        element: <SignInPage />,
      },
      {
        path: "/SinglePostPage",
        element: <SinglePostPage />,
      },
      {
        path: "/Write",
        element: <Write />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
