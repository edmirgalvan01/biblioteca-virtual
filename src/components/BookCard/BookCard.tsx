import { Book } from "../../types/Books";
import "./BookCard.css";

interface Props {
  book: Book;
}

export const BookCard = ({ book }: Props) => {
  return (
    <article className="bookCard">
      <img className="bookCard--img" src={book.img} alt={book.title} />
      <h3 className="bookCard--title">{book.title}</h3>
      <p className="bookCard--author">{book.author}</p>
    </article>
  );
};
