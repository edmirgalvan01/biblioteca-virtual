import { signInUser } from "../services/user.service";
import { AuthError } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { ResponseType } from "../types/Users";
import { useState } from "react";

export const useSignInUser = () => {
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState<AuthError | null>();

  const loggedIn = async (
    email: string,
    password: string
  ): Promise<ResponseType> => {
    const { error } = await signInUser(email, password);
    setResponseError(error);

    if (responseError) {
      return {
        success: false,
        errors: {
          errorSignIn: responseError,
        },
      };
    } else {
      navigate("/home");
      return {
        success: true,
      };
    }
  };

  return { loggedIn };
};
