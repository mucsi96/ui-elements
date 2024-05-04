import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTDropdownMenu',
  render: () => {
    return html`<button bt type="button" popovertarget="dropdown-menu-popover">
        Open
      </button>
      <div popover is="bt-popover" id="dropdown-menu-popover">
        <ul bt-dropdown-menu>
          <li separated>
            <p>John Doe</p>
            <p>john.doe@authelia.com</p>
          </li>
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li separated><a href="#">Menu item 3</a></li>
          <li><button type="button">Sign out</button></li>
        </ul>
      </div>`;
  },
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
