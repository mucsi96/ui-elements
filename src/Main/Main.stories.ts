import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTMainProps } from './Main';

const meta: Meta<BTMainProps> = {
  title: 'BTMain',
  render: () => html`<main is="bt-main"><h1 is="bt-heading">Heading in main</h1></main>`,
  parameters: {
    layout: 'fullscreen',
  }
};
type Story = StoryObj<BTMainProps>;

export default meta;

export const Default: Story = {};
