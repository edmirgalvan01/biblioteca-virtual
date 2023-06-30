import { useGetFavoriteBooks } from "../../../hooks/useGetFavoriteBooks";
import { BackButton } from "../../BackButton";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import "./FavoriteBooks.css";

export const FavoriteBooks = () => {
  const { favoriteBooks } = useGetFavoriteBooks();

  return (
    <div className="favoriteBooks containerPage">
      <BackButton />
      <h1>Libros favoritos</h1>
      <ListOfBooks books={favoriteBooks} />
    </div>
  );
};
