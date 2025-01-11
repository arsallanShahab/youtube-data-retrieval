import Link from "next/link";
import React from "react";
import SignIn from "./sign-in";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center space-x-5">
          <Link
            href={"/"}
            className="text-md md:text-2xl lg:text-3xl font-geist-mono"
          >
            Youtube Playlist
          </Link>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default Navbar;
