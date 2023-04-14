import "./Home.css";
import { useState } from "react";
import database from "../../../mocks/books.json";
import { Book } from "../../../types/Books";

export const Home = () => {
  const [books, setBooks] = useState<Array<Book>>(database);

  return (
    <div className="home">
      <h1>Inicio</h1>
      <section className="filters">
        <button className="filters--button">Todos</button>
        <button className="filters--button">Ofimática</button>
        <button className="filters--button">Laboratorio</button>
        <button className="filters--button">Mecánica</button>
        <button className="filters--button">Contabilidad</button>
        <button className="filters--button">Administración</button>
      </section>
      <section className="listOfBooks">
        {books.map((book) => (
          <article className="book">
            <img className="book--img" src={book.img} alt={book.title} />
            <h3 className="book--title">{book.title}</h3>
            <p className="book--author">{book.author}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
