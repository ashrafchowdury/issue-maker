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
    console.log(email);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/forget",
    });
    if (error) {
      toast.error("Forgate Filed");
      console.log(error);
    } else {
      toast.success("Check Your Email");
    }
  };
  const newPassword = async (password) => {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
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
  const google = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      toast.error("Google Authentication Filed");
      console.log(error);
    } else {
      setusers(data);
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
    newPassword,
    github,
    google,
    updateProfile,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthDataProvider;
