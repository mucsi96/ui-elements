import { css, html } from 'lit';
import { customElement, htmlToString } from '../utils';

export type BTLoaderProps = {};

@customElement({
  name: 'bt-loader',
  extends: 'div',
  styles: css`
    :host {
      display: grid;
      justify-content: center;
      height: 300px;
      align-items: center;
      grid-template-columns: repeat(5, auto);
      gap: 3px;

      div {
        background-color: var(--bt-strong-text-color);
        opacity: 0.85;
        height: 60px;
        width: 7px;
        display: inline-block;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;

        &:nth-child(2) {
          animation-delay: -1.1s;
        }

        &:nth-child(3) {
          animation-delay: -1s;
        }

        &:nth-child(4) {
          animation-delay: -0.9s;
        }

        &:nth-child(5) {
          animation-delay: -0.8s;
        }
      }
    }

    @keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
  `,
})
export class BTLoader extends HTMLDivElement {
  connectedCallback() {
    this.innerHTML = htmlToString(html`
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `);
  }
}
