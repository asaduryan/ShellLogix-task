import { TextFieldProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import type { ChangeEventHandler } from "react";

export interface IInputProps
  extends Omit<TextFieldProps, "label" | "error" | "value"> {
  label?: string;
  warning?: string;
  error?: string;
  sx?: SxProps<Theme>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
