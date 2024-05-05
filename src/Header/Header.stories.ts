import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTHeader',
  render: () =>
    html`<header bt>
        <nav>
          <ul>
            <li><a href="/" bt-logo>App</a></li>
            <li><a href="/" bt-active>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <button bt>Sign in</button>
        </nav>
      </header>
      <div style="min-height: 50px"></div>`,
  parameters: {
    layout: 'fullscreen',
  },
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
