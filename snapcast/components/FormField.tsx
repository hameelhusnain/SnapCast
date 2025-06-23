import React from "react";

interface Option {
  label: string;
  value: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: Option[];
}

const FormField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  as = 'input',
  options = []
}: FormFieldProps) => {

  const InputToRender = () => {
    if (as === 'textarea') {
      return (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    } else if (as === 'select') {
      return (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <InputToRender />
    </div>
  );
};

export default FormField;
