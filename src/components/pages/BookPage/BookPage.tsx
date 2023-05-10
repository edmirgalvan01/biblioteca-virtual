import { useParams } from "react-router-dom";

import { ListOfBooksWithTitle } from "../../ListOfBooks/ListOfBooks";
import { FavoriteIcon } from "../../icons/FavoriteIcon";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";
import { CommentsSection } from "../../CommentsSection/CommentsSection";
import { FavoriteIconMarked } from "../../icons/FavoriteIconMarked";

import { useGetBooks } from "../../../hooks/useGetBooks";

import { useIsFavoriteBook } from "../../../hooks/useIsFavoriteBook";

import "./BookPage.css";

export const BookPage = () => {
  const { id } = useParams();
  const parsedId: number = parseInt(id!);

  const { books } = useGetBooks();
  const { isFavorite, toggleFavorite } = useIsFavoriteBook(parsedId);

  const book = books.find((book) => book.id === parsedId);
  const filteredBooks = books.filter((book) => book.id !== parsedId);

  const handleClickReadBook = () => (window.location.href = book?.link!);

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
        <PrimaryButton onClick={handleClickReadBook}>Leer ahora</PrimaryButton>
        {isFavorite ? (
          <FavoriteIconMarked onClick={toggleFavorite} />
        ) : (
          <FavoriteIcon onClick={toggleFavorite} />
        )}
      </div>
      <ListOfBooksWithTitle
        title="Otros libros"
        books={filteredBooks}
        style="horizontal"
      />
      <CommentsSection />
    </div>
  );
};
