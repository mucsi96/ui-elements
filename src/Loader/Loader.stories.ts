import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTLoaderProps } from './Loader';

const meta: Meta<BTLoaderProps> = {
  title: 'BTLoader',
  render: () => html`<div is="bt-loader"></div>`,
};
type Story = StoryObj<BTLoaderProps>;

export default meta;

export const Default: Story = {};
