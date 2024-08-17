import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CustomDatePicker = styled(DatePicker)`
  height: 56px;

  .MuiOutlinedInput-notchedOutline {
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
  }
`;
