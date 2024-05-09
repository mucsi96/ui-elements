import { injectStyles, onElementConnected } from '../utils';
import styles from './Header.css?raw&inline';
import navbarToggleSvg from './navbar-toggle.svg?raw&inline';

injectStyles(styles);

onElementConnected('header[bt] > nav', (navigation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        navigation.classList.remove('overflowing');
      } else {
        navigation.classList.add('overflowing');
      }
    },
    {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.99],
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
