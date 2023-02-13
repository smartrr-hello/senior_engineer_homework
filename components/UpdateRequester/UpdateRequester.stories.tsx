import UpdateRequestor from './UpdateRequester';
import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: UpdateRequestor,
  title: 'UpdateRequestor',
  argTypes: {
    children: { table: { disable: true }},
    onRequestUpdate: { table: { disable: true }},
    dataTestid: { table: { disable: true }},
  },
  args: {
    onRequestUpdate: (timestamp: Date) => {
      action(`Requested Refresh ${timestamp.toLocaleString}`)
    }
  }
} as ComponentMeta<typeof UpdateRequestor>;

const Template: ComponentStory<typeof UpdateRequestor> = (args) => <UpdateRequestor {...args} />

export const Default = Template.bind({});