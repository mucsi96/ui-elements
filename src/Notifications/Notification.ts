import { customElement } from '../utils';
import './Notification.css';

export class NotificationEvent extends CustomEvent<string> {
  constructor(name: string, message?: string) {
    super(name, { bubbles: true, composed: true, detail: message });
  }
}

export class ErrorNotificationEvent extends NotificationEvent {
  constructor(error: string) {
    super('error-notification', error);
  }
}

export class SuccessNotificationEvent extends NotificationEvent {
  constructor(message: string) {
    super('success-notification', message);
  }
}

export class NotificationEndEvent extends NotificationEvent {
  constructor() {
    super('notification-end');
  }
}

@customElement({
  name: 'bt-notification',
  extends: 'output',
})
export class BTNotification extends HTMLOutputElement {
  connectedCallback() {
    Promise.allSettled(
      this.getAnimations().map((animation) => animation.finished)
    ).then(() => this.dispatchEvent(new NotificationEndEvent()));
  }
}
