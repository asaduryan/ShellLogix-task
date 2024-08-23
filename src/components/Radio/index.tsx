"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import { ForwardedRef, forwardRef } from "react";

import { RadioInputProps } from "./types";
import { RadioMui } from "./radio.styled";
import styles from "./styles.module.scss";

const RadioInput = forwardRef(
  ({ value, label, ...rest }: RadioInputProps, ref: ForwardedRef<Element>) => {
    return (
      <FormControlLabel
        value={value}
        control={<RadioMui />}
        label={<span className={styles.label}>{label}</span>}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default RadioInput;
