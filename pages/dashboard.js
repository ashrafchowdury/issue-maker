import React from "react";
import { BiFile, BiTrash } from "react-icons/bi";

const dashboard = () => {
  return (
    <>
      <h1 className=" text-3xl font-bold mt-24 mb-12">Templates</h1>
      <section className="flex flex-wrap items-center justify-start">
        <div className=" w-[260px] group/item flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg m-3 overflow-hidden whitespace-nowrap cursor-pointer">
          <BiFile className=" text-xl" />{" "}
          <p className=" w-[200px] ml-2 text-[16px]">Find Bug</p>
          <BiTrash className=" invisible group-hover/item:visible hover:text-red-600 duration-300" />
        </div>
      </section>
      <hr className="my-8 border-light dark:border-dark w-full" />
      <h2 className=" text-3xl font-bold">Profile</h2>
    </>
  );
};

export default dashboard;
