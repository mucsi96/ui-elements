import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTButton',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () => html`<button bt>Button text</button>`,
};

export const Green: Story = {
  render: () => html`<button bt bt-green>Button text</button>`,
};

export const Red: Story = {
  render: () => html`<button bt bt-red>Button text</button>`,
};

export const Yellow: Story = {
  render: () => html`<button bt bt-yellow>Button text</button>`,
};

export const Dropdown: Story = {
  render: () =>
    html`<button bt bt-dropdown popovertarget="dropdown-menu-popover">
        Open
        <svg></svg>
      </button>
      <div popover bt id="dropdown-menu-popover">
        <ul bt-dropdown-menu>
          <li bt-separated>
            <p>John Doe</p>
            <p>john.doe@authelia.com</p>
          </li>
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li bt-separated><a href="#">Menu item 3</a></li>
          <li><button type="button">Sign out</button></li>
        </ul>
      </div>`,
};
