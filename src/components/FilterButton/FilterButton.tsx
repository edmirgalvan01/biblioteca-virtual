import "./FilterButton.css";

interface Props {
  filter: string;
  handleClick: (filter: string) => void;
}

export const FilterButton = ({ filter, handleClick }: Props) => {
  return (
    <button onClick={() => handleClick(filter)} className="filterButton">
      {filter}
    </button>
  );
};
