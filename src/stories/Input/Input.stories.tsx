import { Meta, StoryFn } from "@storybook/react";
import { InputComponent } from "./";
import { IInputProps } from "./types";

export default {
  title: "components/InputComponent",
  component: InputComponent,
} as Meta<typeof InputComponent>;

const Template: StoryFn<IInputProps> = (args) => (
  <InputComponent {...args} ref={null} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Survey name",
};

export const Label = Template.bind({});
Label.args = {
  label: "Survey name",
  placeholder: "Survey name",
};

export const Warning = Template.bind({});
Warning.args = {
  placeholder: "Survey name",
  warning: "This will be presented to recipients",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Survey name",
  error: "Survey name is required",
};

export const Full = Template.bind({});
Full.args = {
  placeholder: "Survey name",
  error: "Survey name is required",
  warning: "This will be presented to recipients",
  label: "Survey name",
};
