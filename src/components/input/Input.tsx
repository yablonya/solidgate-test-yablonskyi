import type { FC, InputHTMLAttributes, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  suffix?: ReactNode;
}

const Input: FC<InputProps> = ({ className = "", id, label, helperText, suffix, ...otherProps }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["input"]} ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className={styles["input__label"]}>
          {label}
        </label>
      )}

      <label className={styles["input__field-container"]}>
        <input
          id={id}
          className={styles["input__field"]}
          {...otherProps}
        />
        {suffix && <span className={styles["input__suffix"]}>{suffix}</span>}
      </label>

      {helperText && (
        <span className={styles["input__helper-text"]}>
          {t(helperText)}
        </span>
      )}
    </div>
  );
};

export default Input;