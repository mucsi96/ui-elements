import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTMain',
  render: () => html`<main bt><h1 bt>Heading in main</h1></main>`,
  parameters: {
    layout: 'fullscreen',
  },
};
type Story = StoryObj;

export default meta;

export const Default: Story = {};
