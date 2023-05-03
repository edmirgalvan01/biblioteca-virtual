import { useParams } from "react-router-dom";

import { ListOfBooksWithTitle } from "../../ListOfBooks/ListOfBooks";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { useGetBooks } from "../../../hooks/useGetBooks";

import "./BookPage.css";
import { FavoriteIcon } from "../../icons/FavoriteIcon";

export const BookPage = () => {
  const { books } = useGetBooks();
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id!));

  const handleClickFavorite = () => {
    console.log(parseInt(id!));
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
