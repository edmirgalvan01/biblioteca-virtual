import "./SuccessMessage.css";

interface Props {
  children: string;
  align?: "center" | "right" | "left";
}

export const SuccessMessage = ({ children, align }: Props) => {
  return <p className={`successMessage ${align}`}>{children}</p>;
};
