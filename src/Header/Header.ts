import { css } from 'lit';
import { customElement } from '../utils';

export type BTHeaderProps = {
  title?: string;
};

@customElement({
  name: 'bt-header',
  extends: 'header',
  styles: css`
    :host {
      display: block;
      background-color: hsl(215, 28%, 17%);
      border-bottom: 1px solid hsl(215, 14%, 34%);
      position: sticky;
      top: 0;
      z-index: 40;
      font-family: var(--bt-font-family);

      > * {
        padding: 18px 1rem 19px;
        max-width: 90rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  `,
})
export class BTHeader extends HTMLElement {}
