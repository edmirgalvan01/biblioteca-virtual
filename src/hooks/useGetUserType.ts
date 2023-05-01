import { useEffect, useState } from "react";
import { useGetSession } from "./useGetSession";

export const useGetUserType = () => {
  const { session } = useGetSession();
  const [userType, setUserType] = useState<string>();

  useEffect(() => {
    if (!session?.error) {
      const type = session?.data.session?.user?.user_metadata.userType;
      setUserType(type);
    }
  }, [session]);

  return { userType };
};
