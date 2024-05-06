import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  ErrorNotificationEvent,
  SuccessNotificationEvent,
} from './Notifications';

const meta: Meta = {
  title: 'BTNotifications',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () => {
    setTimeout(() => {
      document.querySelector('#success')?.addEventListener('click', () => {
        document.dispatchEvent(new SuccessNotificationEvent('Completed'));
      });
      document.querySelector('#error')?.addEventListener('click', () => {
        document.dispatchEvent(new ErrorNotificationEvent('Failure'));
      });
    }, 100);
    return html`
      <div>
        <button type="button" bt bt-green id="success">Success</button>
        <button type="button" bt bt-red id="error">Error</button>
      </div>
      <section bt-notifications></section>
    `;
  },
};

