import { useState } from "react";
import { BookType } from "../types/Books";
import { useGetBooks } from "./useGetBooks";

export const useGetBookByName = () => {
  const { books } = useGetBooks();

  const [booksFounded, setBooksFounded] = useState<Array<BookType>>([]);

  const searchBook = (query: string) => {
    const filter = books.filter((book) => book.title.includes(query));
    if (filter.length > 0) setBooksFounded(filter);
    if (filter.length === 0 || query.length === 0) setBooksFounded([]);
  };

  return { booksFounded, searchBook };
};
