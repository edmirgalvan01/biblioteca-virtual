import { UserDataResponse, UserType } from "../types/Users";
import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { USER_TYPES } from "../constants";

export const useUser = () => {
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

  return {
    user,
    handleChangeUser,
    getUserType,
    getUserData,
  };
};
