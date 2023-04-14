import { BiFile, BiTrash } from "react-icons/bi";
import { useAuth } from "@/context/useAuth";

const dashboard = () => {
  const { users } = useAuth();

  return (
    <>
      <section className="h-[40vh] xl:h-[50vh] flex flex-col items-center justify-center">
        <h1 className=" text-2xl md:text-3xl font-bold mb-6 md:mb-8 lg:mb-10 text-center">
          Templates
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className=" w-[200px] md:w-[260px] group/item flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg m-3 overflow-hidden whitespace-nowrap cursor-pointer">
            <BiFile className=" text-[16px] md:text-xl" />{" "}
            <p className=" w-[150px] md:w-[200px] ml-2 text-sm md:text-[16px]">
              Find Bug
            </p>
            <BiTrash className=" invisible group-hover/item:visible hover:text-red-600 duration-300" />
          </div>
        </div>
      </section>

      <hr className=" border-light dark:border-dark w-full" />

      <section className="h-[70vh] md:h-[50vh] mb-28 md:mb-20 flex flex-col items-center justify-center text-center">
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
            : users?.email}
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
