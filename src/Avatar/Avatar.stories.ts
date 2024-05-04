import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTAvatar',
  render: () =>
    html`<header bt>
        <nav>
          <a href="/"><h1 bt>App</h1></a>
          <section>
            <button bt-avatar id="avatar" popovertarget="avatar-popover">
              JD
            </button>
            <div popover bt id="avatar-popover">
              <ul bt-dropdown-menu>
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
type Story = StoryObj;

export default meta;

export const Default: Story = {};
