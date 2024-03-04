import { ButtonComponent } from "../../projects/my-lib/src/lib/button/button.component";
import {Story, Meta} from "@storybook/angular";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  args: {
    label: "Button",
  },
  tags: ['autodocs'],
  argTypes: {
    label:{
      description: "Text del button.",
    },
    type: {
      control: 'radio', 
      description: "Tipus de button.",
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'radio', // Opcional: 'inline-radio'
      description: "Mida del button.",
      options: ['small', 'normal', 'large'],
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
})

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: "small"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  size: "large"
}