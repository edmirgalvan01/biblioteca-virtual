import { useParams } from "react-router-dom";

import { ListOfBooksWithTitle } from "../../ListOfBooks/ListOfBooks";
import { FavoriteIcon } from "../../icons/FavoriteIcon";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { useMarkBookAsFavorite } from "../../../hooks/useMarkBookAsFavorite";
import { useGetBooks } from "../../../hooks/useGetBooks";
import { useGetSession } from "../../../hooks/useGetSession";

import "./BookPage.css";

export const BookPage = () => {
  const { markAsFavorite } = useMarkBookAsFavorite();
  const { session } = useGetSession();
  const { books } = useGetBooks();
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id!));

  const handleClickFavorite = () => {
    const data = {
      user_id: session?.data.session?.user.id,
      book_id: parseInt(id!),
    };

    markAsFavorite(data);
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
        <FavoriteIcon onClick={handleClickFavorite} />
      </div>
      <ListOfBooksWithTitle
        title="Otros libros"
        books={books}
        style="horizontal"
      />
    </div>
  );
};
