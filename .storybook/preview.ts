import { Preview } from '@storybook/web-components';
import { themes } from '@storybook/theming';
import { html as beautifyHtml } from 'js-beautify';
import '../src';
import './preview.css';

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    docs: {
      theme: themes.dark,
      canvas: {
        sourceState: 'shown',
      },
      source: {
        transform: (source) => {
          const formattedSource = beautifyHtml(source.replaceAll('=""', ''), {
            indent_size: 2,
          });
          return formattedSource;
        },
      },
    },
  },
};

export default preview;
