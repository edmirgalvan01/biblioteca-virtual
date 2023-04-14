import "./Home.css";
import { useState } from "react";
import database from "../../../mocks/books.json";
import { Book } from "../../../types/Books";

export const Home = () => {
  const [books, setBooks] = useState<Array<Book>>(database);

  const handleClickFilter = (area: string) => {
    if (area === "todos") return;

    const booksFiltered = database.filter((book) => book.area === area);
    console.log(booksFiltered);

    setBooks(booksFiltered);
  };

  return (
    <div className="home">
      <h1>Inicio</h1>
      <section className="filters">
        <button
          onClick={() => handleClickFilter("todos")}
          className="filters--button"
        >
          Todos
        </button>
        <button
          onClick={() => handleClickFilter("ofimatica")}
          className="filters--button"
        >
          Ofimática
        </button>
        <button
          onClick={() => handleClickFilter("laboratorio")}
          className="filters--button"
        >
          Laboratorio
        </button>
        <button
          onClick={() => handleClickFilter("mecanica")}
          className="filters--button"
        >
          Mecánica
        </button>
        <button
          onClick={() => handleClickFilter("contabilidad")}
          className="filters--button"
        >
          Contabilidad
        </button>
        <button
          onClick={() => handleClickFilter("administracion")}
          className="filters--button"
        >
          Administración
        </button>
      </section>
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
