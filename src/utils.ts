export function injectStyles(styles: string) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.append(style);
}

const listeners: Record<string, (element: HTMLElement | SVGElement) => void> =
  {};

const observer = new MutationObserver((mutations) => {
  const connected = new Set<HTMLElement | SVGElement>();
  const selector = Object.keys(listeners).join(',');

  for (const { addedNodes, removedNodes } of mutations) {
    for (const node of addedNodes) {
      if (!(node instanceof HTMLElement) && !(node instanceof SVGElement))
        continue;

      if (node.matches(selector)) {
        connected.add(node);
      }

      for (const child of node.querySelectorAll(
        getChildSelector(node, selector),
      )) {
        if (!(child instanceof HTMLElement) && !(child instanceof SVGElement))
          continue;

        connected.add(child);
      }
    }
    for (const node of removedNodes) {
      if (!(node instanceof HTMLElement) && !(node instanceof SVGElement))
        continue;

      if (node.matches(selector)) {
        connected.delete(node);
      }

      for (const child of node.querySelectorAll(
        getChildSelector(node, selector),
      )) {
        if (!(child instanceof HTMLElement) && !(child instanceof SVGElement))
          continue;

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
  callback: (element: HTMLElement | SVGElement) => void,
) {
  document
    .querySelectorAll(selector)
    .forEach(
      (element) =>
        (element instanceof HTMLElement || element instanceof SVGElement) &&
        callback(element),
    );
  listeners[selector] = callback;
}

function getChildSelector(node: HTMLElement | SVGElement, selector: string) {
  const selectorSegements = selector.split(/[ >]/);

  if (selectorSegements.length === 1) {
    return selector;
  }

  const childSelector = node.matches(selectorSegements[0])
    ? selector.slice(selectorSegements[0].length).trim().replace(/^>/, '')
    : selector;

  return childSelector;
}
