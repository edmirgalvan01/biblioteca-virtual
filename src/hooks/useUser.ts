import { useState } from "react";
import { ResponseType, UserType } from "../types/Users";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { insertUser, signUpUser } from "../services/user.service";

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
      getUserSession().then(({ data }) => {
        if (data.session) navigate("/home");
      });
      return { success: true };
    } else {
      return { success: false, errors: { errorSignUp, errorInsert } };
    }
  };

  const signInUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      navigate("/home");
      return { data };
    }

    return { error };
  };

  const getUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    return { data, error };
  };

  return {
    user,
    handleChangeUser,
    resetUser,
    createNewUser,
    getUserSession,
    signInUser,
  };
};
