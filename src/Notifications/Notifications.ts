import { customElement, injectStyles } from '../utils';
import {
  ErrorNotificationEvent,
  NotificationEndEvent,
  SuccessNotificationEvent,
} from './Notification';
import styles from './Notifications.css?raw&inline';

injectStyles(styles);

interface CustomEventMap {
  'success-notification': SuccessNotificationEvent;
  'error-notification': ErrorNotificationEvent;
  'notification-end': NotificationEndEvent;
}
declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(
      ev: CustomEventMap[K],
    ): boolean;
  }
}

@customElement({
  name: 'bt-notifications',
  extends: 'section',
})
export class BTNotifications extends HTMLElement {
  constructor() {
    super();
    document.addEventListener(
      'success-notification',
      (event: SuccessNotificationEvent) =>
        this.addNotification('success', event.detail),
    );
    document.addEventListener(
      'error-notification',
      (event: ErrorNotificationEvent) =>
        this.addNotification('error', event.detail),
    );
    document.addEventListener(
      'notification-end',
      (event: NotificationEndEvent) => {
        if (event.target && event.target instanceof HTMLElement) {
          event.target.remove();
        }
      },
    );
  }

  addNotification(type: string, text: string) {
    const heightBefore = this.offsetHeight;
    this.insertAdjacentHTML(
      'beforeend',
      `<output is="bt-notification" bt-type="${type}">${text}</output>`,
    );
    const heightAfter = this.offsetHeight;
    const initialOffset = heightBefore - heightAfter;
    this.animate(
      [
        { transform: `translateY(${initialOffset}px)` },
        { transform: 'translateY(0)' },
      ],
      {
        duration: 150,
        easing: 'ease-out',
      },
    );
  }
}
