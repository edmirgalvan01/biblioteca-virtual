import { Book } from "../../types/Books";
import { BookCard } from "../BookCard/BookCard";
import "./ListOfBooks.css";

interface Props {
  books: Array<Book>;
}

export const ListOfBooks = ({ books }: Props) => {
  return (
    <section className="listOfBooks">
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </section>
  );
};
