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
      <header className=" w-[80%] h-[90vh] mx-auto flex flex-col items-start justify-start">
        <img src="header.svg" alt="image" className=" w-[380px] mt-24 mb-8" />
        <h1 className="w-[90%] text-5xl font-bold capitalize">
          Quickly create an <strong>Issue</strong> for <span ref={ref}></span>
        </h1>
        <p className="w-[70%] text-xl mb-14 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque
          laboriosam non dolore illum in dicta laudantium enim eveniet ad.
          laboriosam non dolore illum in dicta laudantium enim eveniet ad.
        </p>
        <Link href="/editor">
          <button className=" px-5 py-2 rounded-lg bg-dark">
            Getting Started
          </button>
        </Link>
      </header>

      <section className="h-[95vh] flex flex-col items-center justify-center">
        <h2 className=" text-4xl font-bold">Preview</h2>
        <p className=" w-[50%] text-center text-xl mt-4 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          quisquam facilis alias sit quaerat inventore aspernatur. Deleniti
        </p>
        <img
          src="preview.png"
          alt=""
          className="w-[1050px] rounded-lg border shadow-2xl"
        />
      </section>
    
    </>
  );
}
