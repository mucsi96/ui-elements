import { css } from 'lit';
import { customElement } from '../utils';

export type BTAvatarProps = {};

@customElement({
  name: 'bt-avatar',
  extends: 'button',
  styles: css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      overflow: hidden;
      background-color: hsl(215, 14%, 34%);
      border-radius: 9999px;
      border: none;
      color: hsl(216, 12%, 84%);
      cursor: pointer;
    }
  `,
})
export class BTAvatar extends HTMLButtonElement {}
