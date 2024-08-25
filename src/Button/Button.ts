import { injectStyles, onElementConnected } from '../utils';
import styles from './Button.css?raw&inline';
import dropdownSvg from './dropdown.svg?raw&inline';

injectStyles(styles);

onElementConnected('button[bt-dropdown] > svg', (svg) => {
  if (!svg.hasAttribute('viewBox')) {
    svg.outerHTML = dropdownSvg;
  }
});
