import CurrencyDisplay from './CurrencyDisplay';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: CurrencyDisplay,
  title: 'CurrencyDisplay',
  argTypes: {
    children: { table: { disable: true }},
    dataTestid: { table: { disable: true }},
  },
  args: {
    from: 'USD',
    to: 'BRL',
    amountToConvert: 1,
    resultingAmount: 1,
    conversionRate: 1
  }
} as ComponentMeta<typeof CurrencyDisplay>;

const Template: ComponentStory<typeof CurrencyDisplay> = (args) => <CurrencyDisplay {...args} />

export const Default = Template.bind({});
