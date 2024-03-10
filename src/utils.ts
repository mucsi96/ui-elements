import '@ungap/custom-elements';
import { CSSResult } from 'lit';

function injectStyles(name: string, styles: CSSResult) {
  const style = document.createElement('style');
  style.innerHTML = styles.cssText.replace(/:host/g, `button[is='${name}']`);
  style.setAttribute('data-is', name);
  document.head.append(style);
}

export function customElement({
  name,
  extends: extendsTag,
  styles,
}: {
  name: string;
  extends?: string;
  styles?: CSSResult;
}) {
  return (elementClass: CustomElementConstructor) => {
    styles && injectStyles(name, styles);
    customElements.define(name, elementClass, { extends: extendsTag });
  };
}
