import { TextComponent } from "../../projects/my-lib/src/lib/text/text.component";
import {Story, Meta} from "@storybook/angular";

export default {
  title: "Components/Text",
  component: TextComponent,
  args: {
    text: "Text...",
  },
  tags: ['autodocs'],
  argTypes: {
    text:{
      description: "Text del button.",
    },
    type: {
      control: 'radio', 
      description: "Tipus de text.",
      options: ['title', 'subtitle', 'normal'],
    }
  },
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
})

export const TextDefault = Template.bind({});