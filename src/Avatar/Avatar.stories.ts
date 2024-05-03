import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTAvatarProps } from './Avatar';

const meta: Meta<BTAvatarProps> = {
  title: 'BTAvatar',
  render: () =>
    html`<header is="bt-header">
        <nav>
          <a href="/"><h1 is="bt-heading">App</h1></a>
          <section>
            <button is="bt-avatar" id="avatar" popovertarget="avatar-popover">
              JD
            </button>
            <div popover id="avatar-popover" is="bt-popover">
              <ul is="bt-dropdown-menu">
                <li separated>
                  <p>John Doe</p>
                  <p>john.doe@authelia.com</p>
                </li>
                <li><button type="button">Sign out</button></li>
              </ul>
            </div>
          </section>
        </nav>
      </header>
      <div style="min-height: 50px"></div>`,
  parameters: {
    layout: 'fullscreen',
  },
};
type Story = StoryObj<BTAvatarProps>;

export default meta;

export const Default: Story = {};
