import "./Home.css";
import { useState } from "react";
import database from "../../../mocks/books.json";
import { Book } from "../../../types/Books";
import { Filters } from "../../Filters/Filters";

export const Home = () => {
  const [books, setBooks] = useState<Array<Book>>(database);

  return (
    <div className="home">
      <h1>Inicio</h1>
      <Filters books={database} setBooks={setBooks} />
      <section className="listOfBooks">
        {books.map((book) => (
          <article key={book.title} className="book">
            <img className="book--img" src={book.img} alt={book.title} />
            <h3 className="book--title">{book.title}</h3>
            <p className="book--author">{book.author}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
