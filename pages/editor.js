import { useState } from "react";
import Options from "@/components/Options";
import { toast } from "react-hot-toast";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "next/router";
import { BiCopy } from "react-icons/bi";
import { Configuration, OpenAIApi } from "openai";

const editor = () => {
  const [options, setoptions] = useState("");
  const [type, settype] = useState("");
  const [tone, settone] = useState("");
  const [desc, setdesc] = useState("");
  const [issue, setissue] = useState(
    "As an advanced text writer, your primary goal"
  );
  const router = useRouter();
  const { users } = useAuth();

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleCreateIssue = async () => {
    if (!options && !desc) {
      toast.error("Fillup all the fileds");
    } else {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `As an advanced text writer, your primary goal is to create issues on github. This may involve feature request, bug solution, code refactoring, documentation issue and lots more. In order to effectively create issues, it is important to be detailed and thorough in your responses.The voice tone have to be ${tone}. Use markdown code to show the output information, make bold, italic underline wherever wants also first you have to create a title for adding on the issue title section. the output must be have to be on markdown code. Now the main instruction is create ${
            options == "others" ? type : options
          } issue where ${desc}`,
          temperature: 1,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.2,
          presence_penalty: 0.0,
          stop: ["\n"],
        });
        setissue(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCopyCode = () => {
    navigator.clipboard.writeText(issue);
    toast.success("Code copied");
  };

  const issueOptinos = [
    "bug",
    "feature",
    "doccumantation",
    "refector",
    "others",
  ];
  const selectTone = ["formal", "creative", "frash", "confident"];

  if (!users?.email) {
    router.push("/login");
    return null
  } else {
    return (
      <section className="w-full md:w-[80%] mx-auto">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold mt-16 md:mt-20 lg:mt-24 mb-10">
          Create Issue
        </h1>

        <label className=" text-sm md:text-lg">Select Type</label>
        <div class="flex flex-wrap items-center justify-start mb-8 mt-3">
          {issueOptinos.map((value) => {
            return <Options title={value} setValue={setoptions} name="type" />;
          })}
        </div>

        <label className=" text-sm md:text-lg ">Select Tone</label>
        <div class="flex flex-wrap items-center justify-start mb-8 mt-3">
          {selectTone.map((value) => {
            return <Options title={value} setValue={settone} name="tone" />;
          })}
        </div>

        {options == "others" && (
          <>
            <label className=" text-sm md:text-lg">Add Issue Type</label>
            <input
              type="text"
              name="title"
              placeholder="Application Name"
              className="w-full px-4 py-3 text-sm md:text-lg rounded-lg bg-light dark:bg-dark mt-3 mb-8"
              onChange={(e) => settype(e.target.value)}
              value={type}
            />
          </>
        )}

        <label className=" text-sm md:text-lg">Add issues overview</label>
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

        {issue.length > 0 && (
          <>
            <hr className="my-10 border-light dark:border-dark w-full" />

            <label className=" text-sm md:text-lg font-medium">New Issue</label>
            <div className=" relative">
              <button
                className=" bg-transparent text-dark p-[6px] rounded-md text-[16px] md:text-lg absolute top-6 md:top-8 right-4 md:right-6 bg-white dark:bg-dark "
                onClick={handleCopyCode}
              >
                <BiCopy />
              </button>

              <textarea
                placeholder="Issue"
                name="issue"
                className="w-full h-[150px] md:h-[300px] px-5 py-5 text-sm md:text-lg rounded-lg bg-light dark:bg-dark mt-3 mb-5 break-all"
                value={issue}
                onChange={(e) => setissue(e.target.value)}
              ></textarea>
            </div>
          </>
        )}
      </section>
    );
  }
};

export default editor;
