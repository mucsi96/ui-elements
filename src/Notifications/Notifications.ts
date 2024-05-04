import { injectStyles, onElementConnected } from '../utils';
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

function addNotification(root: HTMLElement, type: string, text: string) {
  const heightBefore = root.offsetHeight;
  root.insertAdjacentHTML(
    'beforeend',
    `<output bt bt-type="${type}">${text}</output>`,
  );
  const heightAfter = root.offsetHeight;
  const initialOffset = heightBefore - heightAfter;
  root.animate(
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

onElementConnected('section[bt-notifications]', (element) => {
  document.addEventListener(
    'success-notification',
    (event: SuccessNotificationEvent) =>
      addNotification(element, 'success', event.detail),
  );
  document.addEventListener(
    'error-notification',
    (event: ErrorNotificationEvent) =>
      addNotification(element, 'error', event.detail),
  );
  document.addEventListener(
    'notification-end',
    (event: NotificationEndEvent) => {
      if (event.target && event.target instanceof HTMLElement) {
        event.target.remove();
      }
    },
  );
});
