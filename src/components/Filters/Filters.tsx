import { Book } from "../../types/Books";
import { FilterButton } from "../FilterButton/FilterButton";
import "./Filters.css";

interface Props {
  books: Array<Book>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const Filters = ({ books, setBooks }: Props) => {
  const filtersTitles = [
    "Todos",
    "Ofimatica",
    "Laboratorio",
    "Mecanica",
    "Contabilidad",
    "Administracion",
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
        <FilterButton filter={filter} handleClick={handleClickFilter} />
      ))}
    </section>
  );
};
