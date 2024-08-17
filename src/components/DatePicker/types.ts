import { Dayjs } from "dayjs";

export interface IDatePicker {
  label?: string;
  error?: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}
