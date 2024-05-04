export function injectStyles(styles: string) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.append(style);
}

const listeners: Record<string, (element: HTMLElement) => void> = {};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          Object.entries(listeners).forEach(([selector, callback]) => {
            if (node.matches(selector)) {
              callback(node);
            }
          });
        }
      });
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

export function onElementConnected(
  selector: string,
  callback: (element: HTMLElement) => void,
) {
  listeners[selector] = callback;
}
