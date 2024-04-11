import { html } from 'lit';

export function mainDecorator(story: any) {
  return html`<main data-name="main=decorator" is="bt-main" style="padding: 1rem;">
    ${story()}
  </main>`;
}
