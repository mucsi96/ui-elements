import { injectStyles, onElementConnected } from '../utils';
import styles from './Header.css?raw&inline';
import navbarToggleSvg from './navbar-toggle.svg?raw&inline';

injectStyles(styles);

onElementConnected('header[bt] > nav', (navigation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (
        !entry.isIntersecting &&
        entry.intersectionRect.width !== entry.boundingClientRect.width
      ) {
        navigation.classList.add('overflowing');
      } else {
        navigation.classList.remove('overflowing');
      }
    },
    {
      root: null,
      threshold: 1.0,
    },
  );

  const lastLi = navigation.querySelector('ul > li:last-child');

  if (!lastLi) {
    return;
  }

  observer.observe(lastLi);
});

onElementConnected(
  '[bt-navbar-toggler]',
  (button) => (button.innerHTML = navbarToggleSvg),
);
