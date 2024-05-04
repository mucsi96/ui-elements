import { injectStyles, onElementConnected } from '../utils';
import styles from './Notification.css?raw&inline';

injectStyles(styles);

onElementConnected('output[bt]', (element) => {
  Promise.allSettled(
    element.getAnimations().map((animation) => animation.finished),
  ).then(() => element.remove());
});
