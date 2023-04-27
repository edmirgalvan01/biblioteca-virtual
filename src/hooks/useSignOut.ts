import { useNavigate } from "react-router-dom";
import { ResponseType } from "../types/Users";
import { supabase } from "../supabase/client";

export const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = async (): Promise<ResponseType> => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        errors: { errorSignOut: error },
      };
    } else {
      navigate("/");
      return { success: true };
    }
  };

  return { signOut };
};
