import { deleteFavoriteBook } from "../services/book.service";

export const useUnmarkAsFavorite = () => {
  const unmarkAsFavorite = (id: number) => {
    deleteFavoriteBook(id);
  };

  return { unmarkAsFavorite };
};
