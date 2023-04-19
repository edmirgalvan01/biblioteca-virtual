import { Edit } from "../icons/Edit";
import "./DataItem.css";

interface Props {
  title: string;
  type: string;
  value: string;
}

export const DataItem = ({ title, type, value }: Props) => {
  return (
    <section className="dataItem">
      <div className="information">
        <h4>{title}</h4>
        <input type={type} value={value} />
      </div>
      <Edit />
    </section>
  );
};
