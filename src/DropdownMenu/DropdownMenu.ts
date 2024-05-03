import { css } from 'lit';
import { customElement } from '../utils';

export type BTDropdownMenuProps = {};

@customElement({
  name: 'bt-dropdown-menu',
  extends: 'ul',
  styles: css`
    :host {
      list-style-type: unset;
      margin: unset;
      padding: unset;

      li {
        display: block;
        font-size: 0.875rem;
        color: hsl(220, 13%, 91%);
        --padding: var(--padding-top, 0.5rem) 1rem var(--padding-bottom, 0.5rem);
        --separator-gap: calc(0.3rem + 1px);

        &:has(a, button):hover {
          background-color: hsl(215, 14%, 34%);
          color: var(--bt-strong-text-color);
        }

        &:not(:has(a, button)) {
          padding: var(--padding);
        }

        &:first-child {
          --padding-top: 0.75rem;
        }

        &:last-child {
          --padding-bottom: 0.75rem;
        }

        &[separated] {
          position: relative;
          margin-bottom: var(--separator-gap);

          &:after {
            position: absolute;
            height: 0.3rem;
            bottom: calc(-0.15rem - 1px);
            left: 0;
            right: 0;
            border-bottom: 1px solid hsla(215, 14%, 34%);
            content: '';
            display: block;
          }
        }

        [separated] + & {
          margin-top: var(--separator-gap);
        }
      }

      a,
      button {
        padding: var(--padding);
      }

      a {
        display: block;
        text-decoration: unset;
        color: inherit;
      }

      button {
        width: 100%;
        border: unset;
        background-color: unset;
        font: inherit;
        cursor: pointer;
        text-align: left;
        color: inherit;
      }

      p {
        margin: unset;
        padding: 0.2rem 0;
      }
    }
  `,
})
export class BTDropdownMenu extends HTMLUListElement {}
