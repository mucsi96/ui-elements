import { css } from 'lit';
import { customElement } from '../utils';

export type BTMainProps = {};

@customElement({
  name: 'bt-main',
  extends: 'main',
  styles: css`
    :root {
      --bt-background-color: hsl(222, 47%, 11%);
      --bt-text-color: hsl(218, 11%, 65%);
      --bt-font-family: system-ui;
      --bt-font-size: 14px;
    }

    :host {
      display: block;
      background-color: var(--bt-background-color);
      color: var(--bt-text-color);
      font-family: var(--bt-font-family);
      font-size: var(--bt-font-size);
      padding: 1px 1rem;
      max-width: 90rem;
      margin: 0 auto;
    }
  `,
})
export class BTMain extends HTMLElement {}
