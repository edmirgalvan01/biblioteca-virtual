import "./Fields.css";

interface FieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  errorMessage?: string;
}

interface OptionType {
  value: string;
  label: string;
}

interface InputFieldProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputSelectProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<OptionType>;
}

export const InputField = ({
  name,
  label,
  type = "text",
  onChange = () => {},
  onBlur = () => {},
  errorMessage = "",
}: InputFieldProps) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage.length > 0 && (
        <p className="field--error">{errorMessage}</p>
      )}
    </div>
  );
};

export const SelectField = ({
  name,
  label,
  options,
  errorMessage = "",
  onChange = () => {},
  onBlur = () => {},
}: InputSelectProps) => {
  return (
    <div className="field selectField">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} onBlur={onBlur}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage.length > 0 && (
        <p className="field--error">{errorMessage}</p>
      )}
    </div>
  );
};
