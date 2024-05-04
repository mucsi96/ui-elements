import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTHeading',
};
type Story = StoryObj;

export default meta;

export const Level1: Story = {
  render: () => html`<h1 bt>Heading 1</h1>`,
};

export const Level2: Story = {
  render: () => html`<h2 bt>Heading 2</h2>`,
};

export const Level3: Story = {
  render: () => html`<h3 bt>Heading 3</h3>`,
};

export const Level4: Story = {
  render: () => html`<h4 bt>Heading 4</h4>`,
};
