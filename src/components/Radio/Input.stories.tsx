import { Meta, StoryFn } from "@storybook/react";
import RadioInput from "./index";
import { RadioInputProps } from "./types";

export default {
  title: "components/Radio",
  component: RadioInput,
} as Meta<typeof RadioInput>;

const Template: StoryFn<RadioInputProps> = (args) => <RadioInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
};
