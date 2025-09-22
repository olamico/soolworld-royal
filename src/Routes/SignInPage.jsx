import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/RegisterPage" />
    </div>
  );
};

export default SignInPage;
