import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { SessionResponseType } from "../types/Users";

export const useGetSession = () => {
  const [session, setSession] = useState<SessionResponseType>();

  useEffect(() => {
    supabase.auth.getSession().then((response) => setSession(response));
  }, []);

  return { session };
};
