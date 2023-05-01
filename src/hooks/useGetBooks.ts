import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { BookType } from "../types/Books";
import { getBooks } from "../services/book.service";

export const useGetBooks = () => {
  const [books, setBooks] = useState<Array<BookType>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  useEffect(() => {
    getBooks().then(({ data, error }) => {
      setBooks(data as Array<BookType>);
      setError(error);
    });
  }, []);

  return { books, error };
};
