import { css } from 'lit';
import { customElement } from '../utils';

export type BTMainProps = {};

@customElement({
  name: 'bt-main',
  extends: 'main',
  styles: css`
    :root {
      --bt-background-color: hsl(221, 39%, 11%);
      --bt-text-color: hsl(218, 11%, 65%);
      --bt-strong-text-color: white;
      --bt-font-family: system-ui;
      --bt-link-hover-color: hsl(218, 93%, 61%);
    }

    :host {
      display: block;
      padding: 1px 1rem;
      max-width: 90rem;
      margin: 0 auto;
    }
  `,
})
export class BTMain extends HTMLElement {}
