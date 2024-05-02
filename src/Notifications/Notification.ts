import { css } from 'lit';
import { customElement } from '../utils';

export type BTNotificationProps = {
  type: 'error' | 'success';
};

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
  styles: css`
    @keyframes fade-in {
      from {
        opacity: 0;
      }
    }

    @keyframes fade-out {
      to {
        opacity: 0;
      }
    }

    @keyframes slide-in {
      from {
        transform: translateY(-5vh);
      }
    }

    :host {
      grid-row-start: -1;
      font-size: var(--bt-font-size);
      font-family: var(--bt-font-family);
      font-weight: 500;
      display: inline-block;
      border-radius: 8px;
      padding: 16px;
      width: 400px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
      animation: fade-in 0.3s ease, slide-in 0.3s ease,
        fade-out 0.3s ease 3s forwards;

      &[type='error'] {
        background-color: hsl(0, 96%, 77%);
        color: hsl(0, 74%, 16%);
      }

      &[type='success'] {
        background-color: hsl(145, 78%, 68%);
        color: hsl(145, 100%, 14%);
      }
    }
  `,
})
export class BTNotification extends HTMLOutputElement {
  connectedCallback() {
    Promise.allSettled(
      this.getAnimations().map((animation) => animation.finished)
    ).then(() => this.dispatchEvent(new NotificationEndEvent()));
  }
}