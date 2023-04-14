import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAuth } from "@/context/useAuth";
import { toast } from "react-hot-toast";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { signup, login, isLoading } = useAuth();
  const router = useRouter();

  return (
    <>
      <section className=" w-full sm:w-[400px] lg:w-[700px] flex flex-col lg:flex-row justify-center lg:space-x-9 mt-12 md:mt-[160px] mb-16 md:mb-24 mx-auto">
        <div className=" w-full lg:w-[300px] mb-10 lg:mb-0">
          <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
            Log in or create an account
          </h1>
          <p className=" text-sm md:text-[16px]">
            Quickly get started by signing in using your existing accounts.
          </p>
        </div>

        <section className="w-full sm:w-[400px]">
          <p className=" text-[16px] md:text-lg font-medium mb-6">
            Choose you signing methods
          </p>

          <button
            className="w-full flex items-center justify-center font-semibold rounded-lg px-4 py-3"
            onClick={() => toast.success("Private Beta")}
            disabled={isLoading ? true : false}
          >
            {/* {isLoading ? (
              <Loading load={isLoading} />
            ) : (
              <> */}
            <FaGithub className=" text-xl md:text-[25px]" />
            <span className="text-sm md:text-[16px] ml-3">
              Log in with Github
            </span>
            {/* </>
            )} */}
          </button>

          <hr className="my-6 border-light dark:border-dark w-full" />

          <label className=" font-medium">Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 text-sm md:text-[16px] rounded-lg bg-light dark:bg-dark mt-2 mb-5 outline-transparent"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

          <label className=" text-sm md:text-[16px] font-medium">
            Paswword add minimum 8 characters
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />

          <button
            className="w-full  text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
            onClick={() => signup(email, password)}
            disabled={isLoading ? true : false}
          >
            Log In
            {/* {loading ? <Loading load={loading} /> : "Log In"} */}
          </button>
        </section>
      </section>
    </>
  );
};
export default login;
