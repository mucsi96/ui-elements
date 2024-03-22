import type { Meta, StoryObj } from '@storybook/web-components';
import { BTButton, BTButtonProps } from './Button';
import { html } from 'lit';
import { spread } from '@open-wc/lit-helpers';

const meta: Meta<BTButtonProps> = {
  title: 'BTButton',
  includeStories: ['Green', 'Red', 'Yellow'],
  render: (props: any) =>
    html`<button is="bt-button" ${spread(props)}>Button text</button>`,
};
type Story = StoryObj<BTButtonProps>;

export default meta;

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
};

export { BTButton };
