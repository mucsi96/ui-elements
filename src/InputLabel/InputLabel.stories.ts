import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTInputLabel',
  render: (props: any) =>
    html`<label bt>
      Label text
      <input type="text" value="test value" />
    </label>`,
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
