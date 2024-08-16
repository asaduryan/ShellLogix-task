import { forwardRef } from "react";
import { MenuItem } from "@mui/material";
import { SelectStyled } from "./select.styled";
import styles from "./styles.module.scss";
import { ISelectProps } from "./types";

const SelectComponent = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ label, data, warning, value, onChange, error }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <p className={styles.label}>{label}</p>}
        <SelectStyled
          ref={ref}
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={value}
          onChange={onChange}
        >
          {data &&
            data.map((element, index) => {
              return (
                <MenuItem value={element.value} key={index}>
                  {element.name}
                </MenuItem>
              );
            })}
        </SelectStyled>
        {warning && <p className={styles.warning}>{warning}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);

SelectComponent.displayName = "SelectComponent";
export default SelectComponent;
