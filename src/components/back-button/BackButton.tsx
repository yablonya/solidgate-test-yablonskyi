import type { FC, ButtonHTMLAttributes } from "react";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import styles from "./BackButton.module.scss";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const BackButton: FC<BackButtonProps> = ({ className = "", ...otherProps }) => {
  return (
    <button
      type="button"
      className={`${styles["back-button"]} ${className}`.trim()}
      {...otherProps}
    >
      <img src={arrowLeftIcon} alt="Arrow left icon"/>
    </button>
  );
};

export default BackButton;