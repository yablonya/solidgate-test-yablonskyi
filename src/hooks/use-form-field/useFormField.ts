import { useState, type ChangeEvent } from "react";

const useFormField = (
  initialValue: string,
  formatFn: (value: string) => string,
  validateFn: (value: string) => true | string
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatFn(e.target.value);
    setValue(formatted);
    setError("");
  };

  const onBlur = () => {
    const formatted = formatFn(value);
    setValue(formatted);

    const validationResult = validateFn(formatted);
    setError(validationResult === true ? "" : validationResult);
  };

  return { value, error, onChange, onBlur, setValue, setError };
};

export default useFormField;