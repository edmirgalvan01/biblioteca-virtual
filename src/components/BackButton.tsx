import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "./icons/ArrowBackIcon";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <section onClick={() => navigate(-1)} className="arrow-back">
      <ArrowBackIcon />
    </section>
  );
};
