import { forwardRef } from "react";

import { TextAreaStyled } from "./textarea.styled";
import { ITextareaProps } from "./types";
import styles from "./styles.module.scss";

const TextareaComponent = forwardRef<HTMLInputElement, ITextareaProps>(
  ({ label, warning, error, onChange, value, ...rest }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <p className={styles.label}>{label}</p>}
        <TextAreaStyled
          rows={3}
          fullWidth
          multiline
          variant="outlined"
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
export default TextareaComponent;
