import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { TextFieldStyled } from "./input.styled";
import { IInputProps } from "./types";

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, warning, error, onChange, value, ...rest }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <p className={styles.label}>{label}</p>}
        <TextFieldStyled
          onChange={onChange}
          value={value}
          {...rest}
          inputRef={ref}
        />
        {warning && <p className={styles.warning}>{warning}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);
export default InputComponent;
