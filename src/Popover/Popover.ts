import { injectStyles, onElementConnected } from '../utils';
import styles from './Popover.css?raw&inline';

injectStyles(styles);

onElementConnected('[popover][bt]', (element) => {
  element.addEventListener('beforetoggle', () => {
    element.style.opacity = '0';
  });
  element.addEventListener('toggle', () => {
    const trigger = document.querySelector(
      `[popovertarget="${element.id}"]`,
    ) as HTMLElement;
    element.style.setProperty(
      '--trigger-bottom',
      `${trigger.getBoundingClientRect().bottom}px`,
    );
    element.style.setProperty(
      '--trigger-right',
      `${trigger.getBoundingClientRect().right}px`,
    );
    element.style.setProperty(
      '--trigger-left',
      `${trigger.getBoundingClientRect().left}px`,
    );
    element.style.setProperty(
      '--trigger-center',
      `${(trigger.getBoundingClientRect().right - trigger.getBoundingClientRect().left) / 2}px`,
    );
    const overflows = ['left', 'right', 'center'].map((position) => {
      element.classList.add(position);
      const measure = {
        position,
        overflow: Math.max(
          -Math.min(element.getBoundingClientRect().left, 0),
          -Math.min(
            document.body.clientWidth - element.getBoundingClientRect().right,
            0,
          ),
        ),
      };
      element.classList.remove('left', 'right', 'center');
      return measure;
    });
    overflows.sort((a, b) => a.overflow - b.overflow);
    element.classList.add(overflows[0].position);
    element.style.opacity = '1';
  });
});
