import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTBadge',
};
type Story = StoryObj;

export default meta;

export const Normal: Story = {
  render: () => html`text<span bt-badge>Normal badge</span>`,
};

export const Red: Story = {
  render: () => html`text<span bt-badge bt-red>Red badge</span>`,
};

export const Yellow: Story = {
  render: () => html`text<span bt-badge bt-yellow>Yellow badge</span>`,
};

export const Green: Story = {
  render: () => html`text<span bt-badge bt-green>Green badge</span>`,
};

export const Large: Story = {
  render: () => html`<h1>text<span bt-badge>Large badge</span></h1>`,
};
