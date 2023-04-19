import { Book } from "../../types/Books";
import { BookCard } from "../BookCard/BookCard";
import "./ListOfBooks.css";

interface Props {
  books: Array<Book>;
  style?: string;
}

interface PropsWithTitle extends Props {
  title: string;
}

export const ListOfBooks = ({ books, style = "grid" }: Props) => {
  const styleClassName = style === "grid" ? "grid" : "horizontal";

  return (
    <section className={`listOfBooks ${styleClassName}`}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};

export const ListOfBooksWithTitle = ({
  title,
  books,
  style = "grid",
}: PropsWithTitle) => {
  return (
    <div className="listOfBooksWithTitle">
      <h2>{title}</h2>
      <ListOfBooks books={books} style={style} />
    </div>
  );
};
