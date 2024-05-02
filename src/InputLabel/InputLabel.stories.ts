import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTInputLabelProps } from './InputLabel';

const meta: Meta<BTInputLabelProps> = {
  title: 'BTInputLabel',
  render: (props: any) =>
    html`<label is="bt-input-label">
      Label text
      <input type="text" value="test value" />
    </label>`,
};
type Story = StoryObj<BTInputLabelProps>;

export default meta;

export const Default: Story = {};