import { useParams } from "react-router-dom";

import { ListOfBooksWithTitle } from "../../ListOfBooks/ListOfBooks";
import { FavoriteIcon } from "../../icons/FavoriteIcon";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { useMarkBookAsFavorite } from "../../../hooks/useMarkBookAsFavorite";
import { useGetBooks } from "../../../hooks/useGetBooks";
import { useGetSession } from "../../../hooks/useGetSession";

import { useIsFavoriteBook } from "../../../hooks/useIsFavoriteBook";
import { FavoriteIconMarked } from "../../icons/FavoriteIconMarked";

import "./BookPage.css";
import { useUnmarkAsFavorite } from "../../../hooks/useUnmarkAsFavorite";

export const BookPage = () => {
  const { id } = useParams();
  const { books } = useGetBooks();
  const { session } = useGetSession();
  const { markAsFavorite } = useMarkBookAsFavorite();
  const { unmarkAsFavorite } = useUnmarkAsFavorite();
  const { isFavorite } = useIsFavoriteBook(parseInt(id!));

  const book = books.find((book) => book.id === parseInt(id!));

  const handleClickFavorite = () => {
    if (isFavorite) {
      const data = {
        user_id: session?.data.session?.user.id,
        book_id: parseInt(id!),
      };

      markAsFavorite(data);
    } else {
      unmarkAsFavorite(parseInt(id!));
    }
  };

  return (
    <div className="bookPage">
      <BackButton />
      <section className="bookPage--portrait">
        {book?.img ? (
          <img src={book?.img} alt={book?.title} />
        ) : (
          <div className="without-image">
            <h2>{book?.title[0]}</h2>
          </div>
        )}
        <div className="bookPage--titles">
          <h1>{book?.title}</h1>
          <h2>{book?.author}</h2>
        </div>
      </section>
      <p className="bookPage--description">{book?.description}</p>
      <div className="bookPagae--buttons">
        <PrimaryButton>Leer ahora</PrimaryButton>
        {isFavorite ? (
          <FavoriteIconMarked />
        ) : (
          <FavoriteIcon onClick={handleClickFavorite} />
        )}
      </div>
      <ListOfBooksWithTitle
        title="Otros libros"
        books={books}
        style="horizontal"
      />
    </div>
  );
};
