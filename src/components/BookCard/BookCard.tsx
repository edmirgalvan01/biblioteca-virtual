import { BookType } from "../../types/Books";
import "./BookCard.css";

interface Props {
  book: BookType;
}

export const BookCard = ({ book }: Props) => {
  return (
    <article
      className="bookCard"
      onClick={() => window.location.assign(`/book/${book.id}`)}
    >
      {book.img ? (
        <img className="bookCard--img" src={book.img} alt={book.title} />
      ) : (
        <div className="bookCard--img no-image">
          <h2>{book.title[0]}</h2>
        </div>
      )}
      <h3 className="bookCard--title">{book.title}</h3>
      <p className="bookCard--author">{book.author}</p>
    </article>
  );
};
