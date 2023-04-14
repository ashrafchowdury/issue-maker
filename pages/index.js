import { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        "<strong>Bug</strong>",
        "<strong>Refector</strong>",
        "<strong>Features</strong>",
      ],
      typeSpeed: 80,
      backSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <header className=" w-full md:w-[80%] mx-auto flex flex-col items-start justify-start">
        <img src="header.svg" alt="image" className=" w-[200px] md:w-[320px] lg:w-[380px] mt-12 md:mt-24 mb-8" />
        <h1 className="w-[90%] text-2xl md:text-4xl lg:text-5xl font-bold capitalize">
          Quickly create an <strong>Issue</strong> for <span ref={ref}></span>
        </h1>
        <p className=" w-full md:w-[90%] lg:w-[70%] text-sm md:text-lg lg:text-xl mb-8 md:mb-14 mt-4 md:mt-6 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque
          laboriosam non dolore illum in dicta laudantium enim eveniet ad.
          laboriosam non dolore illum in dicta laudantium enim eveniet ad.
        </p>
        <div className="flex items-center">
          <Link href="/editor">
            <button className="text-sm md:text-[16px] px-5 py-2 rounded-lg bg-dark mr-3 md:mr-5">
              Create Issue
            </button>
          </Link>
          <a href="/editor" className="text-sm md:text-[16px] px-5 py-2 rounded-lg border">
            View GitHub
          </a>
        </div>
      </header>

      <section className=" flex flex-col items-center justify-center my-24 md:my-28 lg:my-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Preview</h2>
        <p className="w-full md:w-[80%] lg:w-[50%] text-center text-sm md:text-lg lg:text-xl mt-4 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          quisquam facilis alias sit quaerat inventore aspernatur. Deleniti
        </p>
        <img
          src="preview.png"
          alt=""
          className="w-full md:w-[650px] lg:w-[1050px] rounded-lg border shadow-2xl"
        />
      </section>
    </>
  );
}
