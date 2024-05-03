import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTDropdownMenuProps } from './DropdownMenu';

const meta: Meta<BTDropdownMenuProps> = {
  title: 'BTDropdownMenu',
  render: () =>
    html`<div is="bt-popover">
      <ul is="bt-dropdown-menu">
        <li separated>
          <p>John Doe</p>
          <p>john.doe@authelia.com</p>
        </li>
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li separated><a href="#">Menu item 3</a></li>
        <li><button type="button">Sign out</button></li>
      </ul>
    </div>`,
};
type Story = StoryObj<BTDropdownMenuProps>;

export default meta;

export const Default: Story = {};
