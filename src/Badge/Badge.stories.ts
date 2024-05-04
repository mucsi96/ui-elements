import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTBadge',
};
type Story = StoryObj;

export default meta;

export const Normal: Story = {
  render: () => html`text<span bt-badge>Badge text</span>`,
};

export const Large: Story = {
  render: () => html`<h1>text<span bt-badge>Badge text</span></h1>`,
};
