import "./ErrorMessage.css";

interface Props {
  children: string;
  align?: "center" | "right" | "left";
}

export const ErrorMessage = ({ children, align }: Props) => {
  return <p className={`errorMessage ${align}`}>{children}</p>;
};
