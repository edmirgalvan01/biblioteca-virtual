import "./Buttons.css";

interface Props {
  children: string;
  onClick?: (event: any) => void;
}

export const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="button primary">
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="button secondary">
      {children}
    </button>
  );
};
