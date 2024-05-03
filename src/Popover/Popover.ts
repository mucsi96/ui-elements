import { css } from 'lit';
import { customElement } from '../utils';

export type BTPopoverProps = {};

@customElement({
  name: 'bt-popover',
  extends: 'div',
  styles: css`
    :host {
      margin: unset;
      padding: unset;
      white-space: nowrap;
      top: calc(var(--trigger-bottom) + 0.5rem);
      background-color: hsl(217, 19%, 27%);
      border-radius: 0.5rem;
      min-width: 11rem;
      border: none;
      color: var(--bt-strong-text-color);
      overflow: hidden;

      &.left {
        left: var(--trigger-left);
      }

      &.right {
        left: var(--trigger-right);
        transform: translateX(-100%);
      }

      &.center {
        left: var(--trigger-center);
        transform: translateX(-50%);
      }
    }
  `,
})
export class BTPopover extends HTMLDivElement {
  connectedCallback() {
    this.addEventListener('beforetoggle', () => {
      this.style.opacity = '0';
    });
    this.addEventListener('toggle', () => {
      const trigger = document.querySelector(
        `[popovertarget="${this.id}"]`,
      ) as HTMLElement;
      this.style.setProperty(
        '--trigger-bottom',
        `${trigger.getBoundingClientRect().bottom}px`,
      );
      this.style.setProperty(
        '--trigger-right',
        `${trigger.getBoundingClientRect().right}px`,
      );
      this.style.setProperty(
        '--trigger-left',
        `${trigger.getBoundingClientRect().left}px`,
      );
      this.style.setProperty(
        '--trigger-center',
        `${(trigger.getBoundingClientRect().right - trigger.getBoundingClientRect().left) / 2}px`,
      );
      const overflows = ['left', 'right', 'center'].map((position) => {
        this.classList.add(position);
        const measure = {
          position,
          overflow: Math.max(
            -Math.min(this.getBoundingClientRect().left, 0),
            -Math.min(
              document.body.clientWidth - this.getBoundingClientRect().right,
              0,
            ),
          ),
        };
        this.classList.remove('left', 'right', 'center');
        return measure;
      });
      overflows.sort((a, b) => a.overflow - b.overflow);
      this.classList.add(overflows[0].position);
      this.style.opacity = '1';
    });
  }
}
