import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  height: 56px;

  .MuiOutlinedInput-notchedOutline {
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
  }
`;
