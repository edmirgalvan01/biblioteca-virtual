import "./FilterButton.css";

interface Props {
  value: string;
  filter: string;
  handleClick: (filter: string) => void;
}

export const FilterButton = ({ value, filter, handleClick }: Props) => {
  return (
    <button onClick={() => handleClick(value)} className="filterButton">
      {filter}
    </button>
  );
};
