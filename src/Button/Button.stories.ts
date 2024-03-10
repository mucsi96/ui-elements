import type { Meta, StoryObj } from '@storybook/web-components';
import { MyButton } from './Button';
import { html } from 'lit';

const meta: Meta<MyButton> = {
  title: 'Components/Button',
  component: 'my-button',
  includeStories: ['Green', 'Red', 'Yellow']
};
type Story = StoryObj<MyButton>;

export default meta;

export const Green: Story = {
  render: () => html`<button is="my-button" color="green">hello</button>`,
};

export const Red: Story = {
  render: () => html`<button is="my-button" color="red">hello</button>`,
};

export const Yellow: Story = {
  render: () => html`<button is="my-button" color="yellow">hello</button>`,
};

export { MyButton };
