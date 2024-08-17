import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioButtonProps } from "./types";

const RadioButton = React.forwardRef<HTMLDivElement, RadioButtonProps>(
  ({ label, options, name, value, onChange }, ref) => {
    return (
      <FormControl ref={ref}>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options?.map((option) => (
            <FormControlLabel
              key={option?.value}
              value={option?.value}
              control={<Radio />}
              label={option?.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  },
);

export default RadioButton;
