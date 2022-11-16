import React, { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, isDisabled, handleClick }) => {
  return (
    <button disabled={isDisabled} onClick={handleClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
