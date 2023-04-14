import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <hr className="my-12 border-light dark:border-dark w-full" />
      <footer className=" flex flex-col justify-center items-center space-y-5 md:space-y-7 lg:space-y-9 mb-10 md:mb-16 lg:mb-20">
        <Link href="/" className="flex items-center mr-6">
          <BiGitPullRequest className="text-2xl mr-2 font-bold" />
          <h1 className="text-2xl font-semibold">Issues</h1>
        </Link>
        <div className="flex flex-wrap justify-center items-center">
          <Link
            href="/"
            className=" text-sm md:text-[16px] px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className=" text-sm md:text-[16px] px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className=" text-sm md:text-[16px] px-3 md:px-4 py-2 rounded-lg hover:bg-light hover:dark:bg-dark duration-200"
          >
            About Us
          </Link>
        </div>
        <div className=" flex justify-center items-center space-x-7 text-2xl">
          <a href="https://twitter.com/readme_maker" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://twitter.com/readme_maker" target="_blank">
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ashrafchowdury/readme-maker"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
        <a
          href="ashrafchowdury.vercel.app"
          target="_blank"
          className="flex flex-col sm:flex-row items-center text-primary font-semibold text-center text-sm md:text-lg"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1624791746927538177/ZoE4RKDW_400x400.jpg"
            alt="Ashraf Chowdury"
            className=" w-6 md:w-8 rounded-full mb-2 sm:mr-2 sm:mb-0"
          />
          Designed & Developed by Ashraf Chowdury
        </a>
      </footer>
    </>
  );
};

export default Footer;
