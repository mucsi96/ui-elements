import '@ungap/custom-elements';
import { css } from 'lit';

export class MyButton extends HTMLButtonElement {
  static tagName = 'my-button';
  static styles = css`
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

  connectedCallback() {
    if (
      document.head.querySelector(`style[data-tagname="${MyButton.tagName}"]`)
    ) {
      return this;
    }

    const style = document.createElement('style');
    style.innerHTML = MyButton.styles.cssText.replace(
      /:host/g,
      `button[is='${MyButton.tagName}']`
    );
    style.setAttribute('data-tagname', MyButton.tagName);
    document.head.append(style);
  }
}

window.customElements.define(MyButton.tagName, MyButton, { extends: 'button' });
