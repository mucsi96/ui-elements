import { customElement, injectStyles } from '../utils';
import styles from './RowSelector.css?raw&inline';
import svg from './RowSelector.svg?raw&inline';

injectStyles(styles);

@customElement({
  name: 'bt-row-selector',
  extends: 'td',
})
export class BTRowSelector extends HTMLTableCellElement {
  connectedCallback() {
    this.insertAdjacentHTML('beforeend', svg);
  }
}
