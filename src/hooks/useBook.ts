import { SyntheticEvent, useState } from "react";
import type { BookType } from "../types/Books";

import { PostgrestError } from "@supabase/supabase-js";

import { useInsertBook } from "./useInsertBook";

export const useBook = () => {
  const { insert } = useInsertBook();
  const [error, setError] = useState<PostgrestError | null>(null);
  const [book, setBook] = useState<BookType>({
    img: "",
    title: "",
    author: "",
    area: "common",
    description: "",
    link: "",
  });

  const handleChange = (property: string, value: string) => {
    setBook({ ...book, [property]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { error: errorResponse } = insert(book);
    setError(errorResponse);
  };

  return { book, handleChange, handleSubmit, error };
};
