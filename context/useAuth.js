import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/supabase/confing";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const AuthDataProvider = ({ children }) => {
  const [users, setusers] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isUser, setisUser] = useState(false);
  const route = useRouter();

  const getUserData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setisUser(true);
      setusers(user);
    } catch (error) {
      setisUser(false);
    }
  };

  const signup = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      toast.error("Signup failed");
      console.log(error);
    } else {
      setusers(data);
      toast.success("Check You Email To Confirme Signup");
    }
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error("Invalid login credentials");
      console.log(error);
    } else {
      setusers(data);
      route.push("/");
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
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Logout Filed");
      console.log(error);
    } else {
      setusers(null);
      route.push("/");
    }
  };

  const github = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      toast.error("Logout Filed");
      console.log(error);
    } else {
      setisUser(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const value = {
    users,
    setusers,
    isUser,
    signup,
    login,
    logout,
    recovary,
    github,
    updateProfile,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthDataProvider;
