import { ForwardedRef, forwardRef } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

import styles from "./styles.module.scss";
import { ICheckboxProps } from "./types";

const CheckboxComponent = forwardRef(
  (
    { label, error, ...rest }: ICheckboxProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <div className={styles.wrapper}>
        <FormControlLabel
          control={<Checkbox {...rest} ref={ref} />}
          label={<span className={styles.label}>{label}</span>}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);
export default CheckboxComponent