import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTButtonProps } from './Button';

const meta: Meta<BTButtonProps> = {
  title: 'BTButton',
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
