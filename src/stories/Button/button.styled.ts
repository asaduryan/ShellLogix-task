import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { TButtonProps } from "./types";

export const ButtonStyled = styled(Button)<TButtonProps>`
  width: fit-content;
  border-radius: 100px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;
