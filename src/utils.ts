import '@ungap/custom-elements';

export function injectStyles(styles: string) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.append(style);
}

type CustomElementOptions = {
  name: string;
  extends?: string;
};

export function customElement(options: CustomElementOptions) {
  const { name, extends: extendsTag } = options;
  return (elementClass: CustomElementConstructor) => {
    elementClass.prototype.createRenderRoot = function () {
      return this;
    };
    customElements.define(name, elementClass, { extends: extendsTag });
  };
}
