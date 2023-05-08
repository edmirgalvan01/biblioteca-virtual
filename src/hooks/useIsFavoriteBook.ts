import { useEffect, useState } from "react";
import { useGetFavoriteData } from "./useGetFavoriteData";

export const useIsFavoriteBook = (bookId: number) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favoriteData } = useGetFavoriteData();

  useEffect(() => {
    //Si alguno coincide con el bookId significa que si fue marcado como favorito
    const response = favoriteData.some((book) => book.book_id === bookId);
    console.log({ favoriteData, response });

    setIsFavorite(response);
  }, [favoriteData]);

  return { isFavorite };
};
