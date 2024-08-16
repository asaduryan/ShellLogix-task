import { SelectChangeEvent, TextFieldProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import type { ReactNode } from "react";

export type TSelectData = {
  name: string;
  value: string;
};

export interface ISelectProps
  extends Omit<TextFieldProps, "onChange" | "error"> {
  data: TSelectData[];
  label?: string;
  warning?: string;
  sx?: SxProps<Theme>;
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  value: string;
  error?: string;
}
