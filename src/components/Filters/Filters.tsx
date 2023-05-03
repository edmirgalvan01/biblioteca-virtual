import { FilterButton } from "../FilterButton/FilterButton";
import { areaTypes, filters } from "../../constants";
import { BookType } from "../../types/Books";
import "./Filters.css";

interface Props {
  books: Array<BookType>;
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const Filters = ({ books, setBooks }: Props) => {
  const handleClickFilter = (area: string) => {
    const booksFiltered = books.filter((book) => {
      if (area === filters.ALL) return books;
      if (book.area === area) return book;
    });

    setBooks(booksFiltered);
  };

  return (
    <section className="filters">
      {areaTypes.map((filter) => (
        <FilterButton
          key={filter.value}
          value={filter.value}
          filter={filter.label}
          handleClick={handleClickFilter}
        />
      ))}
    </section>
  );
};
