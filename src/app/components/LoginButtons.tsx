"use client";
import { signIn, useSession, signOut } from "next-auth/react";

export default function LoginButtons() {
  const { data: session } = useSession();
  const handleLoginWithGoogle = () => {
    signIn("google");
  };
  const handleLoginWithGithub = () => {
    signIn("github");
  };
  const handleLoginWithApple = () => {
    console.log("applelogin click");
  };
  let loginElem = (
    <div className="flex flex-col gap-5 border-r-2 border-solid p-4">
      <button className="" onClick={() => handleLoginWithGoogle()}>
        Google
      </button>
      <button className="" onClick={() => handleLoginWithApple()}>
        Apple
      </button>
      <button className="" onClick={() => handleLoginWithApple()}>
        Facebook
      </button>
      <button className="" onClick={() => handleLoginWithGithub()}>
        Github
      </button>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );

  if (session && session.user) {
    loginElem = (
      <div className="p-4 flex flex-col gap-10">
        Hoşgeldin,
        <button onClick={() => signOut()}>Çıkış yap</button>
      </div>
    );
  }

  return <>{loginElem}</>;
}
