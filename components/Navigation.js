import { useState, useEffect, useCallback } from "react";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { useAuth } from "@/context/useAuth";

const Navigation = () => {
  const [menu, setmenu] = useState(false);
  const { users, logout } = useAuth();

  const handleWindowClick = useCallback((event) => {
    if (event.target && !event.target.closest(".relative")) {
      setmenu(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [handleWindowClick]);


  return (
    <>
      <div className="relative">
        <button
          onClick={() => (menu ? setmenu(false) : setmenu(true))}
          className=" p-2 rounded-lg text-dark dark:text-light bg-light dark:bg-dark duration-200"
        >
          <BiUser className="text-xl" />
        </button>
        {menu && (
          <div className="absolute w-[250px] z-30 right-1 origin-top-right mt-2 rounded-lg shadow-sm bg-white border">
            <div className="px-1 py-1 shadow-md rounded-lg flex flex-col ">
              <p className="px-3 mt-2 overflow-hidden whitespace-nowrap">
                {users?.email}
              </p>
              <hr className="my-2 border-light dark:border-dark w-full" />
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-sm text-start font-medium hover:bg-light hover:dark:bg-dark rounded-md duration-300"
              >
                Dashboard
              </Link>
              <Link
                href="/editor"
                className="flex items-center px-3 py-2 text-sm text-start font-medium hover:bg-light hover:dark:bg-dark rounded-md duration-300"
              >
                Create Issue
              </Link>
              <button
                className=" bg-transparent text-dark dark:text-light flex items-center px-3 py-2 text-sm text-start font-medium hover:bg-light hover:dark:bg-dark rounded-md duration-300"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
