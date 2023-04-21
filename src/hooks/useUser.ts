import { useState } from "react";
import { UserType } from "../types/Users";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
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

  const createNewUser = async () => {
    resetUser();

    //Verify auth user
    const { data, error: errorAuth } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          userType: user.userType,
          name: user.name,
          lastName: user.lastName,
          licenseNumber: user.licenseNumber,
          accessCode: user.accessCode,
        },
      },
    });

    //Add user to database
    const { error: errorInsert } = await supabase.from("users").insert(user);

    if (!errorAuth && !errorInsert) navigate("/home");
  };

  const getUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    return { data, error };
  };

  return { user, handleChangeUser, resetUser, createNewUser, getUserSession };
};
