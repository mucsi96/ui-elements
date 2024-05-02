import { css } from 'lit';
import { customElement } from '../utils';

export type BTHeadingProps = {};

@customElement({
  name: 'bt-heading',
  extends: 'h1',
  styles: css`
    [is="bt-heading"] {
      display: block;
      color: var(--bt-strong-text-color);
      margin: unset;
    }
  `,
})
export class BTHeading extends HTMLHeadingElement {}
