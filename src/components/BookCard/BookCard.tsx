import { Book } from "../../types/Books";

interface Props {
  book: Book;
}

export const BookCard = ({ book }: Props) => {
  return (
    <article className="book">
      <img className="book--img" src={book.img} alt={book.title} />
      <h3 className="book--title">{book.title}</h3>
      <p className="book--author">{book.author}</p>
    </article>
  );
};
