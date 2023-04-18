import { Book } from "../../types/Books";

interface Props {
  books: Array<Book>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const Filters = ({ books, setBooks }: Props) => {
  const filtersTitles = [
    "todos",
    "ofimatica",
    "laboratorio",
    "mecanica",
    "contabilidad",
    "administracion",
  ];

  const handleClickFilter = (area: string) => {
    const booksFiltered = books.filter((book) => {
      if (area === "todos") return books;
      if (book.area === area) return book;
    });
    setBooks(booksFiltered);
  };

  return (
    <section className="filters">
      {filtersTitles.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClickFilter(filter)}
          className="filters--button"
        >
          {filter}
        </button>
      ))}
    </section>
  );
};
