import { useGetFavoriteBooks } from "../../../hooks/useGetFavoriteBooks";

export const FavoriteBooks = () => {
  const { favoriteBooks, error } = useGetFavoriteBooks();
  console.log(favoriteBooks);

  return (
    <div className="favoriteBooks">
      <h1>Favorite books</h1>
    </div>
  );
};
