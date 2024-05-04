import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTPopover',
  render: () =>
    html`<button bt id="trigger" popovertarget="test-popover">Open</button>
      <div popover bt id="test-popover">
        <div>Content text</div>
      </div>`,
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
