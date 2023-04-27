import { ResponseType, UserType } from "../types/Users";
import { signUpUser } from "../services/user.service";
import { AuthError } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useSignUpUser = (user: UserType) => {
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState<AuthError | null>();

  const createNewUser = async (): Promise<ResponseType> => {
    const { errorSignUp } = await signUpUser(user);
    setResponseError(errorSignUp);

    if (!responseError) {
      navigate("/home");
      return { success: true };
    } else {
      return { success: false, errors: { errorSignUp: responseError } };
    }
  };

  return { createNewUser };
};
