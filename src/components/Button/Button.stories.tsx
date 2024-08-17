import { StoryFn, Meta } from "@storybook/react";
import { ButtonComponent } from "./";
import { TButtonProps } from "./types";

export default {
  title: "components/ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    title: {
      control: "text",
    },
    variant: {
      control: {
        type: "select",
        options: ["text", "outlined", "contained"],
      },
    },
  },
} as Meta<typeof ButtonComponent>;

const Template: StoryFn<TButtonProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Button",
  type: "button",
  variant: "contained",
  children: "Primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: "Outlined Button",
  type: "button",
  variant: "outlined",
  children: "Outlined",
};

export const Text = Template.bind({});
Text.args = {
  title: "Text Button",
  type: "button",
  variant: "text",
  children: "Text",
};
