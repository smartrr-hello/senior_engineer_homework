import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button'
}

const Template = (args: ButtonProps) => <Button {...args} >Press Me</Button>

export const Primary = Template.bind({})
