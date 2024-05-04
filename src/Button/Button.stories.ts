import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTButton',
  render: (props: any) =>
    html`<button bt ${spread(props)}>Button text</button>`,
};
type Story = StoryObj;

export default meta;

export const Green: Story = {
  args: {
    'bt-color': 'green',
  },
};

export const Red: Story = {
  args: {
    'bt-color': 'red',
  },
};

export const Yellow: Story = {
  args: {
    'bt-color': 'yellow',
  },
};
