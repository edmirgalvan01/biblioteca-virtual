import { BookType } from "../../types/Books";
import { BookCard } from "../BookCard/BookCard";
import "./ListOfBooks.css";

interface Props {
  books: Array<BookType>;
  style?: string;
}

interface PropsWithTitle extends Props {
  title: string;
}

export const ListOfBooks = ({ books, style = "grid" }: Props) => {
  const styleClassName = style === "grid" ? "grid" : "horizontal";
  const thereAreBooks = books.length > 0;

  return (
    <section className={`listOfBooks ${styleClassName}`}>
      {thereAreBooks ? (
        <>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </>
      ) : (
        <h2 className="without-books">No hay libros disponibles</h2>
      )}
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
