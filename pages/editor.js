import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiCopy, BiSave } from "react-icons/bi";

const editor = () => {
  const [options, setoptions] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  console.log(options);
  const handleCreateIssue = () => {
    if (!options && !title && !desc) {
      toast.error("Fillup all the fileds");
    } else {
    }
  };

  const issueOptinos = ["bug", "feature", "doccumantation", "refector"];

  return (
    <section className="w-full md:w-[80%] mx-auto">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold mt-16 md:mt-20 lg:mt-24 mb-10">
        Create Issue
      </h1>

      <label className=" text-sm md:text-lg font-medium">Select Type</label>
      <div class="flex flex-wrap items-center justify-start mb-6 mt-4">
        {issueOptinos.map((value) => {
          return (
            <div class="flex items-center mr-8 ml-5 my-2 md:my-0">
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-blue-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-blue-500 checked:after:bg-blue-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-blue-500 dark:checked:after:border-blue-500 dark:checked:after:bg-blue-500 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-light dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={value}
                onChange={(e) => setoptions(e.target.value)}
              />
              <label
                class="mt-px capitalize inline-block pl-[0.15rem] hover:cursor-pointer text-[16px] md:text-lg lg:text-xl"
                for="inlineRadio1"
              >
                {value}
              </label>
            </div>
          );
        })}
      </div>

      <label className=" text-sm md:text-lg font-medium">
        Application Name
      </label>
      <input
        type="text"
        name="title"
        placeholder="Application Name"
        className="w-full px-4 py-3 text-sm md:text-lg rounded-lg bg-light dark:bg-dark mt-3 mb-8"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <label className=" text-sm md:text-lg font-medium">
        Add issues overview
      </label>
      <textarea
        name="description"
        placeholder="Add issues overview"
        className="w-full h-[150px] md:h-[300px] px-5 py-5 text-sm md:text-lg rounded-lg bg-light dark:bg-dark mt-3 mb-5 "
        onChange={(e) => setdesc(e.target.value)}
        value={desc}
      ></textarea>
      <button
        className="text-sm md:text-[16px] px-5 py-2 rounded-lg bg-dark mt-2"
        onClick={handleCreateIssue}
      >
        Create Issue
      </button>

      <hr className="my-10 border-light dark:border-dark w-full" />

      <label className=" text-sm md:text-lg font-medium">New Issue</label>
      <div className=" relative">
        <button className=" bg-transparent text-dark p-[6px] rounded-md text-[16px] md:text-lg absolute top-6 md:top-8 right-4 md:right-6 bg-white dark:bg-dark ">
          <BiCopy />
        </button>
        <button className=" bg-transparent text-dark p-[6px] rounded-md text-[16px] md:text-lg absolute top-6 md:top-8 right-12 md:right-16 bg-white dark:bg-dark">
          <BiSave />
        </button>
        <textarea
          placeholder="Issue"
          name="issue"
          className="w-full h-[150px] md:h-[300px] px-5 py-5 text-sm md:text-lg rounded-lg bg-light dark:bg-dark mt-3 mb-5 break-all"
        ></textarea>
      </div>
    </section>
  );
};

export default editor;
