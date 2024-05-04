import { injectStyles, onElementConnected } from '../utils';
import styles from './Table.css?raw&inline';
import svg from './RowSelector.svg?raw&inline';

injectStyles(styles);

onElementConnected('table[bt]', (element) => {
  element.querySelectorAll('td[bt-row-selector]').forEach((node) => {
    node.insertAdjacentHTML('beforeend', svg);
  });
});
