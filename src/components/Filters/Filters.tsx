import { Book } from "../../types/Books";

interface Props {
  books: Array<Book>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const Filters = ({ books, setBooks }: Props) => {
  const handleClickFilter = (area: string) => {
    const booksFiltered = books.filter((book) => {
      if (area === "todos") return books;
      if (book.area === area) return book;
    });
    setBooks(booksFiltered);
  };

  return (
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
  );
};
