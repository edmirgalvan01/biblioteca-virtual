import { ResponseType, SignInUserResponse, UserType } from "../types/Users";
import { signInUser, signUpUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { USER_TYPES } from "../constants";
import { AuthError } from "@supabase/supabase-js";

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
    let errorSignUp = null;
    let errorInsert = null;

    resetUser();

    signUpUser(user).then(({ data, errorSignUp }) => {
      errorSignUp = errorSignUp;
    });

    if (!errorSignUp && !errorInsert) {
      navigate("/home");
      return { success: true };
    } else {
      return { success: false, errors: { errorSignUp, errorInsert } };
    }
  };

  const loggedIn = async (email: string, password: string) => {
    let errorSignIn: AuthError | null = null;

    const { error } = await signInUser(email, password);
    errorSignIn = error;

    if (errorSignIn) {
      return errorSignIn;
    } else {
      navigate("/home");
    }
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

  const getUserData = async () => {
    const { data, error } = await supabase.auth.getSession();
    const userData = data.session?.user.user_metadata;

    return { userData, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    return { error };
  };

  return {
    user,
    handleChangeUser,
    resetUser,
    createNewUser,
    getUserSession,
    loggedIn,
    getUserType,
    signOut,
    getUserData,
  };
};
