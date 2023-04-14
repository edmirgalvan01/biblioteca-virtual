import { Book } from "../../types/Books";
import "./listOfBooks.css";

interface Props {
  books: Array<Book>;
}

export const ListOfBooks = ({ books }: Props) => {
  return (
    <section className="listOfBooks">
      {books.map((book) => (
        <article key={book.title} className="book">
          <img className="book--img" src={book.img} alt={book.title} />
          <h3 className="book--title">{book.title}</h3>
          <p className="book--author">{book.author}</p>
        </article>
      ))}
    </section>
  );
};
