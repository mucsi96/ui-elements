import { injectStyles, onElementConnected } from '../utils';
import styles from './Notifications.css?raw&inline';

injectStyles(styles);

export class NotificationEvent extends CustomEvent<string> {
  constructor(name: string, message?: string) {
    super(name, { bubbles: true, composed: true, detail: message });
  }
}

export class ErrorNotificationEvent extends NotificationEvent {
  constructor(error: string) {
    super('bt-error-notification', error);
  }
}

export class SuccessNotificationEvent extends NotificationEvent {
  constructor(message: string) {
    super('bt-success-notification', message);
  }
}

interface CustomEventMap {
  'bt-success-notification': SuccessNotificationEvent;
  'bt-error-notification': ErrorNotificationEvent;
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

function addNotification(root: Element | null, type: string, text: string) {
  if (!root || !(root instanceof HTMLElement)) {
    return;
  }

  const heightBefore = root.offsetHeight;
  root.insertAdjacentHTML(
    'beforeend',
    `<output bt bt-${type}>${text}</output>`,
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

document.addEventListener(
  'bt-success-notification',
  (event: SuccessNotificationEvent) =>
    addNotification(
      document.querySelector('section[bt-notifications]'),
      'success',
      event.detail,
    ),
);
document.addEventListener(
  'bt-error-notification',
  (event: ErrorNotificationEvent) =>
    addNotification(
      document.querySelector('section[bt-notifications]'),
      'error',
      event.detail,
    ),
);

onElementConnected('section[bt-notifications]', (element) => {
  element.popover = 'manual';
  element.showPopover();
});
