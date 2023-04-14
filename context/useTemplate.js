import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/supabase/confing";
import { toast } from "react-hot-toast";

export const TemplateContext = createContext(null);
export const useTemplate = () => useContext(TemplateContext);

const TemplateDataProvider = ({ children }) => {
  const [template, settemplate] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const getTemplates = async () => {
    try {
      const { data, error } = await supabase.from("countries").select();
      settemplate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTemplate = async () => {
    const { error } = await supabase
      .from("countries")
      .insert({ id: 1, name: "Denmark" });
  };
  const updateTemplate = async () => {
    const { error } = await supabase
      .from("countries")
      .update({ name: "Australia" })
      .eq("id", 1);
  };
  const deleteTemplate = async () => {
    const { error } = await supabase.from("countries").delete().eq("id", 1);
  };

  useEffect(() => {
    getTemplates();
  }, []);

  const value = {
    template,
    isLoading,
    saveTemplate,
    updateTemplate,
    deleteTemplate,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};
export default TemplateDataProvider;
