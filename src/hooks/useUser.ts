import { useGetSession } from "./useGetSession";
import { USER_TYPES } from "../constants";
import { UserType } from "../types/Users";
import { useState } from "react";

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
    const response = useGetSession();
    const [userType, setUserType] = useState<string>(USER_TYPES.USER_STUDENT);

    if (!response.session?.error) {
      const type = response.session?.data.session?.user?.user_metadata.userType;
      setUserType(type);
    }

    return userType;
  };

  return {
    user,
    handleChangeUser,
    getUserType,
  };
};
