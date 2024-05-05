import { injectStyles, onElementConnected } from '../utils';
import styles from './RowSelector.css?raw&inline';
import svg from './RowSelector.svg?raw&inline';

injectStyles(styles);

onElementConnected('td[bt-row-selector]', (element) => {
  element.insertAdjacentHTML('beforeend', svg);
});
