import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTHeaderProps } from './Header';

const meta: Meta<BTHeaderProps> = {
  title: 'BTHeader',
  render: () =>
    html`<header is="bt-header">
        <nav>
          <a href="/"><h1 is="bt-heading">App</h1></a>
          <button is="bt-button">Sign in</button>
        </nav>
      </header>
      <div style="min-height: 50px"></div>`,
  parameters: {
    layout: 'fullscreen',
  },
};
type Story = StoryObj<BTHeaderProps>;

export default meta;

export const Default: Story = {};
