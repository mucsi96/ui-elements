import { css } from 'lit';
import { customElement } from '../utils';

export type BTInputLabelProps = {};

@customElement({
  name: 'bt-input-label',
  extends: 'label',
  styles: css`
    :host {
      display: flex;
      gap: 8px;
      flex-direction: column;

      color: white;
      font-size: var(--bt-font-size);
      font-weight: 500;

      input {
        background-color: hsl(217, 19%, 27%);
        border: 1px solid hsl(215, 14%, 34%);
        color: white;
        font-size: var(--bt-font-size);
        font-weight: 400;
        font-family: inherit;
        padding: 10px;
        border-radius: 8px;
        outline: none;

        &:focus {
          border: 1px solid hsl(218, 93%, 61%);
          box-shadow: hsl(218, 93%, 61%) 0 0 0 1px;
        }

        &:invalid {
          border: 1px solid hsl(0, 96%, 77%);
          box-shadow: hsl(0, 96%, 77%) 0 0 0 1px;
        }

        &::-webkit-inner-spin-button {
          opacity: 0 !important;
        }
      }
    }
  `,
})
export class BTInputLabel extends HTMLLabelElement {}