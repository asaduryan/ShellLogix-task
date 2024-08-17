import { CheckboxProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

export interface ICheckboxProps extends Omit<CheckboxProps, "label" | "error"> {
  label?: string;
  error?: string;
  hint?: string;
  sx?: SxProps<Theme>;
}
