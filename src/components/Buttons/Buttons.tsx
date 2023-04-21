import "./Buttons.css";

interface Props {
  children: string;
  type?: "submit" | "reset" | "button";
  onClick?: (event: any) => void;
}

export const PrimaryButton = ({
  children,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button type={type} onClick={onClick} className="button primary">
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, type }: Props) => {
  return (
    <button type={type} onClick={onClick} className="button secondary">
      {children}
    </button>
  );
};
