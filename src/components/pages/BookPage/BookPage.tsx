import { useParams } from "react-router-dom";

export const BookPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>BookPage</div>;
};
