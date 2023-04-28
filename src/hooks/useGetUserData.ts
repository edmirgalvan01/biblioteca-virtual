import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { AuthError, UserMetadata } from "@supabase/supabase-js";

export const useGetUserData = (): {
  userData: UserMetadata | null | undefined;
  error: AuthError | null | undefined;
} => {
  const [userData, setUserData] = useState<UserMetadata | null>();
  const [error, setError] = useState<AuthError | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      setUserData(data.session?.user.user_metadata);
      setError(error);
    });
  }, []);

  return { userData, error };
};
