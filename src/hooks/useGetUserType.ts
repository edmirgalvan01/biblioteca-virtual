import { useEffect, useState } from "react";
import { useGetSession } from "./useGetSession";
import { USER_TYPES } from "../constants";

export const useGetUserType = () => {
  const { session } = useGetSession();
  const [userType, setUserType] = useState<string>(USER_TYPES.USER_STUDENT);

  useEffect(() => {
    if (!session?.error) {
      const type = session?.data.session?.user?.user_metadata.userType;
      setUserType(type);
    }
  }, []);

  return userType;
};
