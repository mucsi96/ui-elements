import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTTable',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () =>
    html`<table bt>
      <thead>
        <tr>
          <th>Person</th>
          <th>Most interest in</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td bt-no-wrap bt-right-align bt-highlighted>Chris</td>
          <td>HTML tables</td>
          <td bt-center-align>22</td>
        </tr>
        <tr>
          <td bt-no-wrap bt-right-align bt-highlighted>Dennis</td>
          <td>Web accessibility</td>
          <td bt-center-align>45</td>
        </tr>
        <tr>
          <td bt-no-wrap bt-right-align bt-highlighted>Sarah</td>
          <td>JavaScript frameworks</td>
          <td bt-center-align>29</td>
        </tr>
        <tr>
          <td bt-no-wrap bt-right-align bt-highlighted>Karen</td>
          <td>Web performance</td>
          <td bt-center-align>36</td>
        </tr>
      </tbody>
    </table>`,
};

export const WithSelection: Story = {
  render: () =>
    html`<table bt>
      <thead>
        <tr>
          <th></th>
          <th>Person</th>
          <th>Most interest in</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td bt-row-selector></td>
          <td bt-no-wrap bt-right-align bt-highlighted>Chris</td>
          <td>HTML tables</td>
          <td bt-center-align>22</td>
        </tr>
        <tr aria-selected="true">
          <td bt-row-selector></td>
          <td bt-no-wrap bt-right-align bt-highlighted>Dennis</td>
          <td>Web accessibility</td>
          <td bt-center-align>45</td>
        </tr>
        <tr>
          <td bt-row-selector></td>
          <td bt-no-wrap bt-right-align bt-highlighted>Sarah</td>
          <td>JavaScript frameworks</td>
          <td bt-center-align>29</td>
        </tr>
        <tr>
          <td bt-row-selector></td>
          <td bt-no-wrap bt-right-align bt-highlighted>Karen</td>
          <td>Web performance</td>
          <td bt-center-align>36</td>
        </tr>
      </tbody>
    </table>`,
};
