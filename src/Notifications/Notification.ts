import { injectStyles, onElementConnected } from '../utils';
import styles from './Notification.css?raw&inline';

injectStyles(styles);

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

onElementConnected('output[bt]', (element) => {
  Promise.allSettled(
    element.getAnimations().map((animation) => animation.finished),
  ).then(() => element.dispatchEvent(new NotificationEndEvent()));
});
