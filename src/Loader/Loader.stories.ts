import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTLoader',
  render: () =>
    html`<div role="progressbar" bt></div>`,
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
