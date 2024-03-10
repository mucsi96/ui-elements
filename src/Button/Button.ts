import { css } from 'lit';
import { customElement } from '../utils';

export type MyButtonProps = {
  color: 'green' | 'red' | 'yellow';
};

const styles = css`
  :host {
    background-color: var(--button-color);
    border: 1px solid var(--button-color);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  :host[color='green'] {
    --button-color: hsl(161, 92%, 25%);
    --button-hover-color: hsl(163, 93%, 22%);
  }

  :host[color='red'] {
    --button-color: hsl(0, 75%, 51%);
    --button-hover-color: hsl(0, 74%, 45%);
  }

  :host[color='yellow'] {
    --button-color: hsl(42, 93%, 46%);
    --button-hover-color: hsl(37, 97%, 39%);
  }
`;

@customElement({
  name: 'my-button',
  extends: 'button',
  styles,
})
export class MyButton extends HTMLButtonElement {}
