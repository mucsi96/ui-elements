import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTPopoverProps } from './Popover';

const meta: Meta<BTPopoverProps> = {
  title: 'BTPopover',
  render: () =>
    html`<button is="bt-button" id="trigger" popovertarget="test-popover">
        Open
      </button>
      <div popover id="test-popover" is="bt-popover">
        <div>Content text</div>
      </div>
      <div style="min-height: 50px"></div>`,
};
type Story = StoryObj<BTPopoverProps>;

export default meta;

export const Default: Story = {};
