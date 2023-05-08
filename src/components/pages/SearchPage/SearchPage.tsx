import { BackButton } from "../../BackButton";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import "./SearchPage.css";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <BackButton />
      <h1>Buscar</h1>
      <form className="searchPage--form">
        <input type="text" placeholder="Principios de la electrónica" />
        <button>Buscar</button>
      </form>
      {/* <ListOfBooks/> */}
    </div>
  );
};
