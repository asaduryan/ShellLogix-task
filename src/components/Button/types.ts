import type { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import type { ReactNode } from "react";
import { SxProps, Theme } from "@mui/system";

export interface TButtonProps extends MUIButtonProps {
  children: ReactNode;
  variant: "text" | "outlined" | "contained";
  sx?: SxProps<Theme>;
}
