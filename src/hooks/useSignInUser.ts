import { signInUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { ResponseType } from "../types/Users";

export const useSignInUser = () => {
  const navigate = useNavigate();

  const loggedIn = async (
    email: string,
    password: string
  ): Promise<ResponseType> => {
    const { error } = await signInUser(email, password);

    if (error) {
      return {
        success: false,
        errors: {
          errorSignIn: error,
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
