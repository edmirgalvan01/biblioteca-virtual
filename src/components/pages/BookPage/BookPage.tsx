import { useParams } from "react-router-dom";

export const BookPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="bookPage">
      <div className="arrow-back">
        <a href="">Atras</a>
      </div>
      <div className="bookPage--portrait">
        <img src="" alt="" />
        <div className="bookPage--titles">
          <h1></h1>
          <h2></h2>
        </div>
      </div>
      <p className="bookPage--description"></p>
      <button className="primaryButton">Leer ahora</button>
      <div className="other-books"></div>
    </div>
  );
};
