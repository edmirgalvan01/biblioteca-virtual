interface FieldProps {
  label: string;
  type?: string;
  name: string;
  required: boolean;
  value: string;
}

interface OptionType {
  value: string;
  label: string;
}

interface InputFieldProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputSelectProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<OptionType>;
}

export const InputField = ({
  name,
  label,
  type = "text",
  required = false,
  onChange = () => {},
  value,
}: InputFieldProps) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        required={required}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  );
};

export const SelectField = ({
  name,
  label,
  required = false,
  options,
  onChange = () => {},
}: InputSelectProps) => {
  return (
    <div className="field selectField">
      <label htmlFor={name}>{label}</label>
      <select required={required} name={name} id={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
