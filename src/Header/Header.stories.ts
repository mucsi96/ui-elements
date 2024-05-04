import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTHeader',
  render: () =>
    html`<header bt>
        <nav>
          <a href="/"><h1 bt>App</h1></a>
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
