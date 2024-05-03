import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTNotificationsProps } from './Notifications';
import {
  ErrorNotificationEvent,
  SuccessNotificationEvent,
} from './Notification';
import { customElement, htmlToString } from '../utils';

@customElement({
  name: 'bt-notifications-docs',
})
class NotificationDocs extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = htmlToString(
      html`<div>
        <button type="button" is="bt-button" color="green" id="success">
          Success
        </button>
        <button type="button" is="bt-button" color="red" id="error">
          Error
        </button>
      </div>`,
    );
    this.querySelector('#success')?.addEventListener('click', () => {
      document.dispatchEvent(new SuccessNotificationEvent('Completed'));
    });
    this.querySelector('#error')?.addEventListener('click', () => {
      document.dispatchEvent(new ErrorNotificationEvent('Failure'));
    });
  }
}

const meta: Meta<BTNotificationsProps> = {
  title: 'BTNotifications',
};
type Story = StoryObj<BTNotificationsProps>;

export default meta;

export const Default: Story = {
  render: () =>
    html` <bt-notifications-docs></bt-notifications-docs>
      <section is="bt-notifications"></section>
      <div style="min-height: 300px;"></div>`,
};
