import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTHeadingProps } from './Heading';

const meta: Meta<BTHeadingProps> = {
  title: 'BTHeading',
};
type Story = StoryObj<BTHeadingProps>;

export default meta;

export const Level1: Story = {
  render: () => html`<h1 is="bt-heading">Heading 1</h1>`,
};

export const Level2: Story = {
  render: () => html`<h2 is="bt-heading">Heading 2</h2>`,
};

export const Level3: Story = {
  render: () => html`<h3 is="bt-heading">Heading 3</h3>`,
};

export const Level4: Story = {
  render: () => html`<h4 is="bt-heading">Heading 4</h4>`,
};
