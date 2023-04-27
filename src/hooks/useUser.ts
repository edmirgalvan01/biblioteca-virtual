import { UserDataResponse, UserType } from "../types/Users";
import { signInUser } from "../services/user.service";
import { AuthError } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
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

  const getUserData = async (): Promise<UserDataResponse> => {
    const { data, error } = await supabase.auth.getSession();

    const userData = data.session?.user.user_metadata;

    return { userData, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) navigate("/");

    return { error };
  };

  return {
    user,
    handleChangeUser,
    getUserSession,
    loggedIn,
    getUserType,
    signOut,
    getUserData,
  };
};
