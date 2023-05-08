import { useState } from "react";

import type { BookType } from "../types/Books";

import { PostgrestError } from "@supabase/supabase-js";

import { useInsertBook } from "./useInsertBook";
import { useNavigate } from "react-router-dom";

export const useBook = () => {
  const navigate = useNavigate();
  const { insert } = useInsertBook();
  const [error, setError] = useState<PostgrestError | null>(null);

  const handleSubmit = (values: BookType) => {
    const { error: errorResponse } = insert(values);
    if (!errorResponse) navigate("/home");
    setError(errorResponse);
  };

  return { handleSubmit, error };
};
