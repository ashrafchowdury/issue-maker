import React from "react";
import { BiGitPullRequest } from "react-icons/bi";
import Link from "next/link";
const Navabar = () => {
  return (
    <nav className="h-[68px] flex items-center justify-between border-b">
      <div className="flex items-center justify-start">
        <Link href="/" className="flex items-center mr-6">
          <BiGitPullRequest className="text-2xl mr-2 font-bold" />
          <h1 className="text-2xl font-semibold">Issues</h1>
        </Link>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className=" text-sm md:text-[16px] font-medium px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            Home
          </Link>
          <Link
            href="/editor"
            className=" text-sm md:text-[16px] font-medium px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            Editor
          </Link>
          <Link
            href="/"
            className=" text-sm md:text-[16px] font-medium px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
      <Link href="/login">
        <button className=" px-6 py-2 rounded-lg bg-dark">LogIn</button>
      </Link>
    </nav>
  );
};

export default Navabar;
