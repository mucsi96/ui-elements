import type { Meta, StoryObj } from '@storybook/web-components';
import { MyButton, MyButtonProps } from './Button';
import { html } from 'lit';
import { spread } from '@open-wc/lit-helpers';

const meta: Meta<MyButtonProps> = {
  title: 'Components/Button',
  component: 'my-button',
  includeStories: ['Green', 'Red', 'Yellow'],
  render: (props: any) =>
    html`<button is="my-button" ${spread(props)}>Button text</button>`,
};
type Story = StoryObj<MyButtonProps>;

export default meta;

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
};

export { MyButton };
