import { Preview } from '@storybook/web-components';
import { html as beautifyHtml } from 'js-beautify';
import '../src';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    viewMode: 'docs',
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        transform: (source) => {
          const sourceWithoutDecorators = source
            .replace(/<div><\/div>/g, '')
            .replace(/^\s*\n/gm, '')
            .match(/^<main data-name="main=decorator"[^>]*?>([\s\S]*?)<\/main>$/);
          const formattedSource = beautifyHtml(
            sourceWithoutDecorators ? sourceWithoutDecorators[1] : source,
            {
              indent_size: 2,
            },
          );
          return formattedSource;
        },
      },
    },
  },
};

export default preview;
