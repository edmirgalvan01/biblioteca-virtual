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

  return {
    user,
    handleChangeUser,
  };
};
