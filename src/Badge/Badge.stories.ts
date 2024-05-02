import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTBadgeProps } from './Badge';

const meta: Meta<BTBadgeProps> = {
  title: 'BTBadge',
};
type Story = StoryObj<BTBadgeProps>;

export default meta;

export const Normal: Story = {
  render: () => html`text<span is="bt-badge">Badge text</span>`,
};

export const Large: Story = {
  render: () => html`<h1>text<span is="bt-badge">Badge text</span></h1>`,
};
