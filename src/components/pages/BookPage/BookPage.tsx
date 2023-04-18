import { useParams } from "react-router-dom";

export const BookPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="bookPage">
      <section className="arrow-back">
        <a href="">Atras</a>
      </section>
      <section className="bookPage--portrait">
        <img src="" alt="" />
        <div className="bookPage--titles">
          <h1></h1>
          <h2></h2>
        </div>
      </section>
      <p className="bookPage--description"></p>
      <button className="primaryButton">Leer ahora</button>
      <section className="other-books"></section>
    </div>
  );
};
