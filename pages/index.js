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
        <img
          src="header.svg"
          alt="image"
          className=" w-[200px] md:w-[320px] lg:w-[380px] mt-12 md:mt-24 mb-8"
        />
        <h1 className="w-[90%] text-2xl md:text-4xl lg:text-5xl font-bold capitalize">
          Quickly create an <strong>Issue</strong> for <span ref={ref}></span>
        </h1>
        <p className=" w-full md:w-[90%] lg:w-[70%] text-sm md:text-lg lg:text-xl mb-8 md:mb-14 mt-4 md:mt-6 font-light">
          Tired of spending hours creating issues on GitHub? Let our
          state-of-the-art application do the heavy lifting for you. With its
          advanced AI capabilities, you'll be able to submit bug reports and
          feature requests in a snap!
        </p>
        <div className="flex items-center">
          <Link href="/editor">
            <button className="text-sm md:text-[16px] px-5 py-2 rounded-lg bg-dark mr-3 md:mr-5">
              Create Issue
            </button>
          </Link>
          <a
            href="https://github.com/ashrafchowdury/issue-maker"
            className="text-sm md:text-[16px] px-5 py-2 rounded-lg border"
            target="_blank"
          >
            View GitHub
          </a>
        </div>
      </header>

      <section className=" flex flex-col items-center justify-center my-24 md:my-28 lg:my-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Preview</h2>
        <p className="w-full md:w-[80%] lg:w-[50%] text-center text-sm md:text-lg lg:text-xl mt-4 mb-12">
          Introducing our revolutionary application that uses advanced AI to
          create issues on GitHub! Say goodbye to manual bug reporting and
          feature requests.
        </p>
        <img
          src="poster.png"
          alt=""
          className="w-full md:w-[650px] lg:w-[1050px] rounded-lg border shadow-2xl"
        />
      </section>
    </>
  );
}
