import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTButton',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () => html`<button bt>Button text</button>`,
};

export const Green: Story = {
  render: () => html`<button bt bt-green>Button text</button>`,
};

export const Red: Story = {
  render: () => html`<button bt bt-red>Button text</button>`,
};

export const Yellow: Story = {
  render: () => html`<button bt bt-yellow>Button text</button>`,
};
