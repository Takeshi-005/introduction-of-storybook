import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/stories/', true, /.(story|stories).tsx$/);

function loadStories() {
  addParameters({
    docs: DocsPage,
  });
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

configure(loadStories, module);
