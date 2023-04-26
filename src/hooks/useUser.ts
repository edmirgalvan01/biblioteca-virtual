import { useEffect, useState } from "react";
import { ResponseType, SignInUserResponse, UserType } from "../types/Users";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { insertUser, signInUser, signUpUser } from "../services/user.service";
import { USER_TYPES } from "../constants";

export const useUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>({
    userType: "student",
    name: "",
    lastName: "",
    email: "",
    password: "",
    licenseNumber: "",
    accessCode: "",
  });

  const handleChangeUser = (value: string, property: string) => {
    setUser({
      ...user,
      [property]: value,
    });
  };

  const resetUser = () => {
    setUser({
      userType: "student",
      name: "",
      lastName: "",
      email: "",
      password: "",
      licenseNumber: "",
      accessCode: "",
    });
  };

  const createNewUser = async (): Promise<ResponseType> => {
    let dataSignUp = null;
    let errorSignUp = null;
    let errorInsert = null;

    resetUser();

    signUpUser(user).then(({ data, errorSignUp }) => {
      dataSignUp = data;
      errorSignUp = errorSignUp;
    });

    insertUser(user).then(({ error }) => {
      errorInsert = error;
    });

    if (!errorSignUp && !errorInsert) {
      navigate("/home");
      return { success: true };
    } else {
      return { success: false, errors: { errorSignUp, errorInsert } };
    }
  };

  const loggedIn = async (
    email: string,
    password: string
  ): Promise<SignInUserResponse> => {
    let errorSignIn = null;
    let dataSignIn = null;

    signInUser(email, password).then(({ data, error }) => {
      errorSignIn = error;
      dataSignIn = data;
    });

    if (!errorSignIn) {
      navigate("/home");
      return { dataSignIn };
    }

    return { errorSignIn };
  };

  const getUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    return { data, error };
  };

  const getUserType = () => {
    const [userType, setUserType] = useState<string>(USER_TYPES.USER_STUDENT);

    useEffect(() => {
      getUserSession().then(({ data, error }) => {
        if (!error) {
          const type = data.session?.user?.user_metadata.userType;
          setUserType(type);
        }
      });
    }, []);

    return userType;
  };

  return {
    user,
    handleChangeUser,
    resetUser,
    createNewUser,
    getUserSession,
    loggedIn,
    getUserType,
  };
};
