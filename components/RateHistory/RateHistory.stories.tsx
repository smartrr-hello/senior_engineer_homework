import RateHistory from './RateHistory';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import HistoricalRecords from '../../fixtures/HistoricalRecords';

export default {
  component: RateHistory,
  title: 'RateHistory',
  argTypes: {
    children: { table: { disable: true }},
    dataTestid: { table: { disable: true }},
    records: { table: { disable: true }},
  },
  args: {
    records: HistoricalRecords
  }
} as ComponentMeta<typeof RateHistory>;

const Template: ComponentStory<typeof RateHistory> = (args) => <RateHistory {...args} />

export const Default = Template.bind({});
