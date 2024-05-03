import { css } from 'lit';
import { customElement } from '../utils';

export type BTHeadingProps = {};

@customElement({
  name: 'bt-heading',
  extends: 'h1',
  styles: css`
    [is='bt-heading'] {
      display: block;
      color: var(--heading-color, var(--bt-strong-text-color));
      transition: color 0.3s;
      margin: unset;

      a:has(&) {
        color: var(--bt-strong-text-color);
        text-decoration: none;
      }

      a:has(&):hover {
        --heading-color: var(--bt-link-hover-color);
      }
    }
  `,
})
export class BTHeading extends HTMLHeadingElement {}
