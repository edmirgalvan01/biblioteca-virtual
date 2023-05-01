import { FilterButton } from "../FilterButton/FilterButton";
import { filters, filtersTitles } from "../../constants";
import { BookType } from "../../types/Books";
import "./Filters.css";

interface Props {
  books: Array<BookType>;
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const Filters = ({ books, setBooks }: Props) => {
  const handleClickFilter = (area: string) => {
    const booksFiltered = books.filter((book) => {
      if (area === filters.COMMON) return books;
      if (book.area === area) return book;
    });
    console.log({ books, booksFiltered });

    setBooks(booksFiltered);
  };

  return (
    <section className="filters">
      {filtersTitles.map((filter) => (
        <FilterButton
          key={filter}
          filter={filter}
          handleClick={handleClickFilter}
        />
      ))}
    </section>
  );
};
