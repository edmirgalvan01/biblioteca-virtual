import { useGetBookByName } from "../../../hooks/useGetBookByName";
import { BackButton } from "../../BackButton";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import "./SearchPage.css";

export const SearchPage = () => {
  const { booksFounded, searchBook } = useGetBookByName();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    searchBook(query);
  };

  return (
    <div className="searchPage containerPage">
      <BackButton />
      <h1>Buscar</h1>
      <form className="searchPage--form">
        <input
          type="text"
          placeholder="Principios de la electrónica"
          onChange={handleChange}
        />
        <button>Buscar</button>
      </form>
      <ListOfBooks books={booksFounded} />
    </div>
  );
};
