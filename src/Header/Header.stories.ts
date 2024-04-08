import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTHeaderProps } from './Header';

const meta: Meta<BTHeaderProps> = {
  title: 'BTHeader',
  render: () =>
    html`<header is="bt-header" title="Header title">
      <div>child text</div>
    </header>`,
};
type Story = StoryObj<BTHeaderProps>;

export default meta;

export const Default: Story = {};
