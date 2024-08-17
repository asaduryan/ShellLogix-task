import { Meta, StoryFn } from "@storybook/react";
import { CheckboxComponent } from "./index";
import { ICheckboxProps } from "./types";

export default {
  title: "components/CheckboxComponent",
  component: CheckboxComponent,
} as Meta<typeof CheckboxComponent>;

const Template: StoryFn<ICheckboxProps> = (args) => (
  <CheckboxComponent {...args} ref={null} />
);

export const Default = Template.bind({});
Default.args = {
  label: "checkbox",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "checkbox",
  checked: true,
};
