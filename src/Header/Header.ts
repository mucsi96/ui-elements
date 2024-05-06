import { injectStyles, onElementConnected } from '../utils';
import styles from './Header.css?raw&inline';

injectStyles(styles);

onElementConnected('header[bt] > nav > ul', (menu) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        menu.classList.remove('overflowing');
      } else {
        menu.classList.add('overflowing');
      }
    },
    {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.99],
    },
  );

  const lastLi = menu.querySelector('li:last-child');

  if (!lastLi) {
    return;
  }

  observer.observe(lastLi);
});
