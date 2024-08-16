import type { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { CustomDatePicker } from "./datePicker.styled";
import styles from "./styles.module.scss";
import { IDatePicker } from "./types";

const DatePickerComponent: FC<IDatePicker> = ({
  label,
  error,
  onChange,
  value,
}) => {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomDatePicker value={value} onChange={onChange} />
      </LocalizationProvider>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default DatePickerComponent;
