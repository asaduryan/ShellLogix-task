import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectComponent from "./index";
import { ISelectProps } from "./types";

export default {
  title: "components/SelectComponent",
  component: SelectComponent,
} as Meta<typeof SelectComponent>;

const Template: StoryFn<ISelectProps> = (args) => (
  <div style={{ width: 350 }}>
    <SelectComponent {...args} ref={null} />
  </div>
);

export const Default = Template.bind({});
const selectData = [
  { name: "item", value: "item" },
  { name: "item", value: "item" },
  { name: "item", value: "item" },
];
Default.args = {
  data: selectData,
};

export const Label = Template.bind({});

Label.args = {
  label: "Form",
  data: selectData,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form",
  data: selectData,
  error: "Select one of the options",
};
