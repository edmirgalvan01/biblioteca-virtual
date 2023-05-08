import { useEffect, useState } from "react";
import { useGetFavoriteData } from "./useGetFavoriteData";

export const useIsFavoriteBook = (bookId: number) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favoriteData } = useGetFavoriteData();

  useEffect(() => {
    const response = favoriteData.some((book) => book.book_id === bookId);

    setIsFavorite(response);
  }, [favoriteData]);

  return { isFavorite };
};
