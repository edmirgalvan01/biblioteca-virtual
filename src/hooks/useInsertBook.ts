import { PostgrestError } from "@supabase/supabase-js";
import { useState } from "react";
import { BookType } from "../types/Books";
import { insertBook } from "../services/book.service";

export const useInsertBook = () => {
  const [error, setError] = useState<PostgrestError | null>(null);

  const insert = (
    book: BookType
  ): {
    error: PostgrestError | null;
  } => {
    insertBook(book).then(({ error }) => setError(error));
    return { error };
  };

  return { insert };
};
