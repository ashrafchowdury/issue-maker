import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/supabase/confing";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const AuthDataProvider = ({ children }) => {
  // const [user, setuser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isUser, setisUser] = useState(false);
  const route = useRouter();

  const getUserData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      // setuser(user);
    } catch (error) {
      setisUser(false);
    }
  };

  const signup = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      console.log(data);
      // route.push("/editor");
    } catch (error) {
      toast.error("SignUp Filed");
      console.log(error);
    }
  };
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      route.push("/editor");
    } catch (error) {
      toast.error("Login Filed");
      console.log(error);
    }
  };
  const recovary = async (email) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://example.com/update-password",
      });
    } catch (error) {
      toast.error("Forgate Filed");
      console.log(error);
    }
  };
  const updateProfile = async (email) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        email: email,
      });
    } catch (error) {
      toast.error("Profile Update Filed");
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setisUser(false);
      route.push("/");
    } catch (error) {
      toast.error("Logout Filed");
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const value = {
    // user,
    // setuser,
    isUser,
    signup,
    login,
    logout,
    recovary,
    updateProfile,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthDataProvider;
