import { useEffect } from "react";
import { BiFile, BiTrash } from "react-icons/bi";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();
  const { users, isUser } = useAuth();

  useEffect(() => {
    if (!isUser) {
      router.push("/login");
    }
  }, []);
  
  const useName = users?.email.indexOf("@");
  return (
    <>
      <section className="h-[80vh] mb-28 md:mb-20 flex flex-col items-center justify-center text-center">
        <h2 className=" text-2xl md:text-3xl font-bold mb-8">Profile</h2>
        {users?.user_metadata?.avatar_url && (
          <img
            src={users?.user_metadata?.avatar_url}
            alt={users?.user_metadata?.full_name}
            className=" w-[120px] md:w-[200px] rounded-full object-cover mb-7 border"
          />
        )}

        <p className=" mb-4 text-[16px] lg:text-lg">
          <strong>Name:</strong>{" "}
          {users?.user_metadata?.full_name
            ? users?.user_metadata?.full_name
            : users?.email.slice(0, useName)}
        </p>
        <p className=" mb-4 text-[16px] lg:text-lg">
          <strong>Email:</strong> {users?.email}
        </p>
        <p className=" mb-4 text-[16px] lg:text-lg">
          <strong>User Id:</strong> {users?.id}
        </p>

        <button className="text-sm md:text-[16px] text-white text-center font-semibold rounded-lg px-8 py-3 mt-9">
          Logout
        </button>
      </section>
    </>
  );
};

export default dashboard;
