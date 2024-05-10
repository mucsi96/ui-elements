import { injectStyles, onElementConnected } from '../utils';
import styles from './Header.css?raw&inline';
import navbarToggleSvg from './navbar-toggle.svg?raw&inline';

injectStyles(styles);

onElementConnected('header[bt] > nav', (navigation) => {
  const root = navigation.querySelector(':scope > ul');
  const target = root?.querySelector(':scope > li:last-child');

  if (!root || !target) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        navigation.classList.add('overflowing');
      } else {
        navigation.classList.remove('overflowing');
      }
    },
    {
      root,
      threshold: 1.0,
    },
  );

  observer.observe(target);
});

onElementConnected(
  '[bt-navbar-toggler]',
  (button) => (button.innerHTML = navbarToggleSvg),
);
