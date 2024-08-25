import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTText',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () => html`<span bt-text>Example text </span>`,
};

export const Green: Story = {
  render: () => html`<p bt-text bt-green>Example text </p>`,
};

export const Red: Story = {
  render: () => html`<h1 bt-text bt-red>Example text </h1>`,
};

export const White: Story = {
  render: () => html`<h2 bt-text bt-white>Example text </h2>`,
};

export const Blue: Story = {
  render: () => html`<h3 bt-text bt-blue>Example text </h3>`,
};

export const Yellow: Story = {
  render: () => html`<h3 bt-text bt-yellow>Example text </h3>`,
};
