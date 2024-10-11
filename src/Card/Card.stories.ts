import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTCard',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () => html`<a href="#" bt-card><h2 bt>Card text</h2></a>`,
};

