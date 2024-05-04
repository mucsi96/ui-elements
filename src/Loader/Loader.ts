import { injectStyles, onElementConnected } from '../utils';
import styles from './Loader.css?raw&inline';

injectStyles(styles);

onElementConnected('[role="progressbar"][bt]', (element) => {
  element.insertAdjacentHTML(
    'beforeend',
    '<div></div><div></div><div></div><div></div><div></div>',
  );
});
