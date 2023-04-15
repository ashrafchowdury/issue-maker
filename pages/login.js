import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAuth } from "@/context/useAuth";

import { toast } from "react-hot-toast";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [forget, setforget] = useState(false);
  const [option, setoption] = useState("signup");
  const { users, signup, login, isLoading, github, google, recovary } =
    useAuth();

  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Fillup Both Fileds");
    } else {
      option == "signup" ? signup(email, password) : login(email, password);
    }
  };

  if (users?.email) {
    router.push("/editor");
    return null;
  } else {
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
              className="w-full flex items-center justify-center font-semibold rounded-lg px-4 py-3 mb-3"
              onClick={() => github()}
              // disabled={isLoading ? true : false}
            >
              <FaGithub className=" text-xl md:text-[25px]" />
              <span className="text-sm md:text-[16px] ml-3">
                Continue with Github
              </span>
            </button>

            <button
              className="w-full flex items-center justify-center font-semibold rounded-lg px-4 py-3 bg-blue-600"
              onClick={() => google()}
              // disabled={isLoading ? true : false}
            >
              <FaGoogle className=" text-xl md:text-[25px]" />
              <span className="text-sm md:text-[16px] ml-3">
                Continue with Google
              </span>
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
              Add Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className={`w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 mb-2 ${
                forget ? "opacity-75 cursor-not-allowed" : "opacity-100"
              }`}
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              disabled={forget}
            />

            {option == "signup" ? (
              <p className=" cursor-pointer" onClick={() => setoption("login")}>
                Have an Account: <u>Login</u>
              </p>
            ) : (
              <div className=" flex items-center justify-between">
                <p
                  className=" cursor-pointer"
                  onClick={() => {
                    setoption("signup");
                    setforget(false);
                  }}
                >
                  New here: <u>Create Account</u>{" "}
                </p>
                <p
                  className=" cursor-pointer text-red-600"
                  onClick={() => setforget(true)}
                >
                  Forget Passwoed!
                </p>
              </div>
            )}
            {forget ? (
              <button
                className="w-full  text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
                onClick={() =>
                  !email ? toast.error("Add your Email") : recovary(email)
                }
              >
                Forget Password
              </button>
            ) : (
              <button
                className="w-full  text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
                onClick={handleLogin}
                disabled={isLoading ? true : false}
              >
                {option == "signup" ? "Sign Up" : "Log In"}
              </button>
            )}
          </section>
        </section>
      </>
    );
  }
};
export default login;
