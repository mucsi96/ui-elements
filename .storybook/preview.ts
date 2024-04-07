import { Preview } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/components/main';
import '../src';

const preview: Preview = {
  decorators: [
    (story) =>
      html`<main is="bt-main" style="height: 100vh; padding: 1rem;">
        ${story()}
      </main>`,
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default preview;
