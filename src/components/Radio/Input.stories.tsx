import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioButton from "./index.tsx";
import { RadioButtonProps } from "./types.ts";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange(event);
  };

  return <RadioButton {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Select an option",
  name: "radio-group",
  value: "option1",
  options: [{ value: "option1" }, { value: "option2" }, { value: "option3" }],
};

export const Label = Template.bind({});
Label.args = {
  label: "Select an option",
  name: "radio-group",
  value: "option1",
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};
