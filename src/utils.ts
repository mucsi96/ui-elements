export function injectStyles(styles: string) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.append(style);
}

const listeners: Record<string, (element: HTMLElement) => void> = {};

const observer = new MutationObserver((mutations) => {
  const connected = new Set<HTMLElement>();
  const selector = Object.keys(listeners).join(',');

  for (const { addedNodes, removedNodes } of mutations) {
    for (const node of addedNodes) {
      if (!(node instanceof HTMLElement)) continue;

      if (node.matches(selector)) {
        connected.add(node);
      }

      for (const child of node.querySelectorAll(selector)) {
        if (!(child instanceof HTMLElement)) continue;

        connected.add(child);
      }
    }
    for (const node of removedNodes) {
      if (!(node instanceof HTMLElement)) continue;

      if (node.matches(selector)) {
        connected.delete(node);
      }

      for (const child of node.querySelectorAll(selector)) {
        if (!(child instanceof HTMLElement)) continue;

        connected.delete(child);
      }
    }
  }

  for (const node of connected) {
    Object.entries(listeners).forEach(([selector, callback]) => {
      if (node.matches(selector)) {
        callback(node);
      }
    });
  }
});
observer.observe(document, {
  childList: true,
  subtree: true,
});

export function onElementConnected(
  selector: string,
  callback: (element: HTMLElement) => void,
) {
  listeners[selector] = callback;
}
