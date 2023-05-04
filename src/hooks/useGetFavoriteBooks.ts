import { useEffect, useState } from "react";
import { getBookById } from "../services/book.service";
import { BookType } from "../types/Books";
import { useGetFavoriteData } from "./useGetFavoriteData";

export const useGetFavoriteBooks = () => {
  const { favoriteData, error } = useGetFavoriteData();
  const [favoriteBooks, setFavoriteBooks] = useState<Array<BookType>>([]);

  useEffect(() => {
    favoriteData.forEach((book) => {
      getBookById(book.book_id!).then(({ data, error }) => {
        if (!error) {
          setFavoriteBooks((prevState) => [...prevState, data![0] as BookType]);
        }
      });
    });
  }, [favoriteData]);

  return { favoriteBooks, error };
};
