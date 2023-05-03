import { useGetFavoriteBooks } from "../../../hooks/useGetFavoriteBooks";
import { BackButton } from "../../BackButton";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import "./FavoriteBooks.css";

export const FavoriteBooks = () => {
  const { favoriteBooks } = useGetFavoriteBooks();

  return (
    <div className="favoriteBooks">
      <BackButton />
      <h1>Favorite books</h1>
      <ListOfBooks books={favoriteBooks} />
    </div>
  );
};
