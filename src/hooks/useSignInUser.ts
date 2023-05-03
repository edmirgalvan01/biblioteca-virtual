import { signInUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { ResponseType } from "../types/Users";

export const useSignInUser = () => {
  const navigate = useNavigate();

  const loggedIn = async (
    email: string,
    password: string
  ): Promise<ResponseType> => {
    const { data, error } = await signInUser(email, password);

    const userSession = data.session;
    const userData = data.user;

    localStorage.setItem("userSession", JSON.stringify(userSession));
    localStorage.setItem("userData", JSON.stringify(userData));

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
