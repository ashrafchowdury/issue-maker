import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/useAuth";

const forget = () => {
  const [password, setpassword] = useState("");
  const { isUser, newPassword } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUser) {
      router?.push("/editor");
    }
  }, []);

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold mt-16 md:mt-20 lg:mt-24 mb-10">
        Add New Password
      </h1>

      <input
        type="password"
        placeholder="Add New Password"
        className=" w-[95%] sm:w-[450px] px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 mb-2"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
      <button
        className="text-white text-center font-semibold rounded-lg px-8 py-2 mt-9"
        onClick={() => newPassword(password)}
      >
        Submit
      </button>
    </div>
  );
};

export default forget;
