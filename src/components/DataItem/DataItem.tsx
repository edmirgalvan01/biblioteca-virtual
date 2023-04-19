import { useState } from "react";
import { Edit } from "../icons/Edit";
import "./DataItem.css";

interface Props {
  title: string;
  type: string;
  value: string;
  handleChange: () => void;
}

export const DataItem = ({ title, type, value, handleChange }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const inputClassName = disabled ? "disabled" : "actived";

  return (
    <section className="dataItem">
      <div className="information">
        <h4>{title}</h4>
        <input
          className={inputClassName}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      <Edit onClick={() => setDisabled(!disabled)} />
    </section>
  );
};
